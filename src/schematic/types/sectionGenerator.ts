import { GriiotSchemaItem } from './schema';

export interface Section {
  getType(): unknown;
  clean(path: string): Promise<void>;
  generate(entries: unknown, path: string): Promise<unknown>;
  initSchema(schema: GriiotSchemaItem, path?: string): Promise<unknown>;
}
