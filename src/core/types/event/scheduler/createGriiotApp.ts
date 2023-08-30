import { GriiotEvent } from '../griiotEvent';
import { GriiotApp, GriiotAppInput } from './griiotApp';

export interface CreateGriiotAppEvent extends GriiotEvent<GriiotAppInput> {}

export interface GriiotAppEvent extends GriiotEvent<GriiotApp> {}
