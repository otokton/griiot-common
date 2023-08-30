import { GriiotEvent } from '../griiotEvent';
import { Database, DatabaseInput } from './database';

export interface CreateDatabaseEvent extends GriiotEvent<DatabaseInput> {}

export interface DatabaseEvent extends GriiotEvent<Database> {}
