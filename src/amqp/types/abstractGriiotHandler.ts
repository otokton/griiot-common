import { GriiotEvent } from '../../core';

export abstract class AbstractGriiotHandler {
  abstract name: string;
  abstract handle(event: GriiotEvent<unknown>): Promise<void>;
  abstract handleError(schemaId: string, error?: unknown): Promise<void>;
}
