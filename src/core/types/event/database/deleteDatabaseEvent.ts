import { GriiotEvent } from '../griiotEvent';

export interface DeleteDatabaseEvent extends GriiotEvent {
  name: string;
}
