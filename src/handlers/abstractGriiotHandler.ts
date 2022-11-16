import { MessageModel } from '@otokton/griiot-core';

export abstract class AbstractGriiotHandler {
  abstract handle(data: unknown): Promise<MessageModel<unknown>>;
}
