import { GriiotSchema } from './schema';

export interface Section {
  getType(): unknown;
  clean(path: string): Promise<void>;
  generate(entries: unknown, path: string): Promise<unknown>;
  initSchema(schema: GriiotSchema, path?: string): Promise<unknown>;
}
