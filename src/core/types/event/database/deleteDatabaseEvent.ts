import { GriiotEvent } from '../griiotEvent';
import { DatabaseInput } from './database';

export interface DeleteDatabaseEvent extends GriiotEvent<DatabaseInput> {}
