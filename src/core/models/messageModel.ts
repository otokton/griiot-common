import { DatabaseMessageType } from '../enums/databaseMessageType';
import { OnlineMessageType } from '../enums/onlineMessageType';
import { SchedulerMessageType } from '../enums/schedulerMessageType';
import { SchematicMessageType } from '../enums/schematicMessageType';

export interface MessageModel<T> {
  data?: T;
  error?: unknown;
  type:
    | DatabaseMessageType
    | SchematicMessageType
    | SchedulerMessageType
    | OnlineMessageType;
}
