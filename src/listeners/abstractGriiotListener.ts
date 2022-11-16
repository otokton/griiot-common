import { logger, MessageModel } from '@otokton/griiot-core';
import * as amqp from 'amqplib';
import { listen } from '../helpers';

export abstract class AbstractGriiotListener {
  queueName: string;

  constructor(queueName: string) {
    this.queueName = queueName;
  }

  async listen(ch: amqp.Channel): Promise<void> {
    try {
      return listen(ch, this.queueName, this.handleConsume);
    } catch (error) {
      logger.error(`[amqp] - listen on ${this.queueName} failed: ${error}`);
    }
  }

  abstract handleConsume(
    type: unknown,
    data: unknown
  ): Promise<MessageModel<unknown>>;
}
