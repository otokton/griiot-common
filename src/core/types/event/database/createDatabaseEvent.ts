import { GriiotEvent } from '../griiotEvent';

export interface CreateDatabaseEvent extends GriiotEvent {
  name: string;
}

export interface DatabaseEvent extends GriiotEvent {
  databaseUri: string;
}
