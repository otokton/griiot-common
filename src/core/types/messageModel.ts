import { SchedulerMessageType } from '../enums';
import { DatabaseMessageType } from '../enums/databaseMessageType';
import { OnlineMessageType } from '../enums/onlineMessageType';
import { SchematicMessageType } from '../enums/schematicMessageType';
import { GriiotEvent } from './event/griiotEvent';

export interface MessageModel<T> {
  schemaId: string;
  data?: T;
  error?: unknown;
  type:
    | DatabaseMessageType
    | SchematicMessageType
    | SchedulerMessageType
    | OnlineMessageType;
}

export interface MessageModelEvent {
  error?: unknown;
  event: GriiotEvent;
}
