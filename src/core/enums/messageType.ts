import { ClientMessageType } from './clientMessageType';
import { DatabaseMessageType } from './databaseMessageType';
import { OnlineMessageType } from './onlineMessageType';
import { SchedulerMessageType } from './schedulerMessageType';
import { SchematicMessageType } from './schematicMessageType';

export type MessageType =
  | DatabaseMessageType
  | SchematicMessageType
  | SchedulerMessageType
  | OnlineMessageType
  | ClientMessageType;
