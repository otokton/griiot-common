import { SchedulerMessageType } from '../enums';
import { DatabaseMessageType } from '../enums/databaseMessageType';
import { OnlineMessageType } from '../enums/onlineMessageType';
import { SchematicMessageType } from '../enums/schematicMessageType';

export interface MessageModel<T> {
  id: string;
  data?: T;
  error?: unknown;
  type:
    | DatabaseMessageType
    | SchematicMessageType
    | SchedulerMessageType
    | OnlineMessageType;
}
