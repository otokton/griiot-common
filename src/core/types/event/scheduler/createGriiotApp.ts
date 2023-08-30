import { GriiotEvent } from '../griiotEvent';

export interface CreateGriiotAppEvent extends GriiotEvent {
  schemaName: string;
}

export interface GriiotAppEvent extends GriiotEvent {
  schemaName: string;
}
