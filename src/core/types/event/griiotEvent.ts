import {
  DatabaseMessageType,
  OnlineMessageType,
  SchedulerMessageType,
  SchematicMessageType
} from '../../enums';

export interface GriiotEvent {
  schemaId: string;
  type:
    | DatabaseMessageType
    | SchematicMessageType
    | SchedulerMessageType
    | OnlineMessageType;
}
