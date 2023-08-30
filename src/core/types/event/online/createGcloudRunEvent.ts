import { GriiotService } from '../../service/griiotService';
import { GriiotEvent } from '../griiotEvent';
import { GcloudRunInput } from './gcloudRun';

export interface CreateGcloudRunEvent extends GriiotEvent<GcloudRunInput> {}

export interface GcloudRunEvent extends GriiotEvent<GriiotService> {}
