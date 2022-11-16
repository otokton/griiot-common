import * as amqp from 'amqplib';
import { AbstractGriiotListener } from './abstractGriiotListener';

let LISTENER_REGISTRY: { [x: string]: new () => AbstractGriiotListener };

export type ListenerKeys = keyof typeof LISTENER_REGISTRY;
export type ListernerType = typeof LISTENER_REGISTRY[ListenerKeys];
type ExtractInstanceType<T> = T extends new () => infer R ? R : unknown;

export class ListenerFactory {
  static getListerner(k: ListenerKeys): ExtractInstanceType<ListernerType> {
    return new LISTENER_REGISTRY[k]();
  }
}

export const registerListeners = async (
  ch: amqp.Channel,
  registry: { [x: string]: new () => AbstractGriiotListener }
) => {
  LISTENER_REGISTRY = registry;
  await Promise.all(
    Object.keys(registry).map(async (listener: string) =>
      ListenerFactory.getListerner(listener as ListenerKeys).listen(ch)
    )
  );
};
