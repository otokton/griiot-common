import { AbstractType } from '../../core';
import { GriiotSchemaItem } from '../../schematic';

export interface GriiotSchema extends AbstractType {
  name: string;
  userId: string;
  item: GriiotSchemaItem;
}
