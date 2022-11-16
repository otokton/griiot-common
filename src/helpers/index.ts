import { logger, MessageModel } from '@otokton/griiot-core';
import amqp, { Channel } from 'amqplib';

let channel: Channel;

export const initiateAmqpConnection = async (
  rabbitmqUrl: string
): Promise<Channel> => {
  const connection = await amqp.connect(rabbitmqUrl);
  channel = await connection.createChannel();
  logger.info(`[amqp] - Channel created`);
  process.on('exit', async (code) => {
    await channel.close();
    await connection.close();
    logger.info(
      `Closed rabbitmq connection : process exited with code ${code}`
    );
  });
  return channel;
};

export const listen = async (
  ch: amqp.Channel,
  queueName: string,
  handleConsume: (
    type: unknown,
    data: unknown
  ) => Promise<MessageModel<unknown>>
): Promise<void> => {
  const okAssert = ch.assertQueue(queueName, { durable: true });
  const okConsume = okAssert.then(function () {
    ch.prefetch(1);
    return ch.consume(queueName, (msg) => consume(ch, msg, handleConsume));
  });

  return okConsume.then(function (_consumeOk) {
    logger.info(
      `[amqp] - woker on queue ${queueName} [*] Waiting for messages...`
    );
  });
};

export const consume = async (
  ch: amqp.Channel,
  msg: amqp.ConsumeMessage | null,
  handleConsume: (
    type: unknown,
    data: unknown
  ) => Promise<MessageModel<unknown>>
): Promise<void> => {
  const content = parsingMessage(msg);
  if (!content) return;
  const response = await handleConsume(content.type, content.data);
  replyTo(ch, msg, response);
};

export const replyTo = (
  ch: amqp.Channel,
  msg: amqp.ConsumeMessage | null,
  response: unknown
): void => {
  const correlationId = msg?.properties.correlationId;
  const replyTo = msg?.properties.replyTo || 'scheduler';
  publish(ch, msg, response, replyTo, {
    correlationId
  });
};

export const publish = (
  ch: amqp.Channel,
  msg: amqp.ConsumeMessage | null,
  response: unknown,
  responseQueue: string,
  options?: amqp.Options.Publish
): void => {
  try {
    ch.sendToQueue(
      responseQueue,
      Buffer.from(JSON.stringify(response)),
      options
    );
    if (msg) ch.ack(msg);
    logger.info(
      `[amqp][pulbish] ${responseQueue} - ${JSON.stringify(response)}`
    );
  } catch (error) {
    logger.error(`[amqp][pulbish] - Publish response failed : ${error}`);
  }
};
export function parsingMessage(
  msg: amqp.ConsumeMessage | null
): MessageModel<unknown> | undefined {
  if (!msg?.content) return;
  let content;
  try {
    content = JSON.parse(msg.content?.toString()) as MessageModel<unknown>;
  } catch (error) {
    logger.error(`[amqp][parsingMessage] - failed to parse the content`);
  }
  if (content)
    logger.info(
      `[amqp][${JSON.stringify(content.type)}] - ${JSON.stringify(
        content.data
      )}`
    );

  return content;
}
