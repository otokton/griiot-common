import { GriiotEvent } from '../griiotEvent';

export interface DeleteGcloudRunEvent extends GriiotEvent {
  name: string;
}
