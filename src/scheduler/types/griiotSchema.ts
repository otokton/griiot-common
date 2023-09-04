import { AbstractType, SchemaStatusType } from '../../core';
import { SchemaOpenApi } from '../../schematic';

export interface GriiotSchema extends AbstractType {
  name: string;
  userId: string;
  processId: string;
  item: SchemaOpenApi;
  status: SchemaStatusType;
}
