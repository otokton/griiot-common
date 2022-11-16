import { AbstractGriiotHandler } from './abstractGriiotHandler';

let HANDLER_REGISTRY: { [x: string]: new () => AbstractGriiotHandler };

type HandlerKeys = keyof typeof HANDLER_REGISTRY;
type HandlerType = typeof HANDLER_REGISTRY[HandlerKeys];
type ExtractInstanceType<T> = AbstractGriiotHandler;

export class HandlerFactory {
  static setRegistry(registry: {
    [x: string]: new () => AbstractGriiotHandler;
  }) {
    HANDLER_REGISTRY = registry;
  }

  static getHandler(
    k: HandlerKeys
  ): ExtractInstanceType<HandlerType> | undefined {
    return HANDLER_REGISTRY && HANDLER_REGISTRY[k]
      ? new HANDLER_REGISTRY[k]()
      : undefined;
  }
}
