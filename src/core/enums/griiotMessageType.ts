import { DatabaseMessageType } from './databaseMessageType';
import { OnlineMessageType } from './onlineMessageType';
import { SchedulerMessageType } from './schedulerMessageType';

export type GriiotMessageType =
  | DatabaseMessageType
  | OnlineMessageType
  | SchedulerMessageType
  | SchedulerMessageType;
