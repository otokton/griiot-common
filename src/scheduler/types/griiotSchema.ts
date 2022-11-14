import { AbstractType } from '../../core';
import { GriiotSchemaItem } from '../../schematic';

export interface GriiotSchema extends AbstractType {
  userId: string;
  schema: GriiotSchemaItem;
}
