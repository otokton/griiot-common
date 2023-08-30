import {
  DatabaseMessageType,
  OnlineMessageType,
  SchedulerMessageType,
  SchematicMessageType
} from '../../enums';

export interface GriiotEvent<T> {
  schemaId: string;
  type:
    | DatabaseMessageType
    | SchematicMessageType
    | SchedulerMessageType
    | OnlineMessageType;
  data: T;
}
