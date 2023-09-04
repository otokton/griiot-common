import { ClientMessageType } from './clientMessageType';
import { DatabaseMessageType } from './databaseMessageType';
import { OnlineMessageType } from './onlineMessageType';
import { SchedulerMessageType } from './schedulerMessageType';
import { SchematicMessageType } from './schematicMessageType';
import { TechnicalMessageType } from './technicalMessageType';

export type MessageType =
  | DatabaseMessageType
  | SchematicMessageType
  | SchedulerMessageType
  | OnlineMessageType
  | ClientMessageType
  | TechnicalMessageType;
