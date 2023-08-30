import { GriiotService } from '../../service/griiotService';
import { GriiotEvent } from '../griiotEvent';

export interface CreateGcloudRunEvent extends GriiotEvent {
  name: string;
}

export interface GcloudRunEvent extends GriiotService, GriiotEvent {}
