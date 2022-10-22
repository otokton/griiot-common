import { GriiotSchema } from '../../schematic';

export interface Schema {
  _id: string;
  userId: string;
  schema: GriiotSchema;
}
