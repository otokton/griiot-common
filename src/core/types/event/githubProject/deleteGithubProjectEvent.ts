import { GriiotEvent } from '../griiotEvent';

export interface DeleteGithubProjectEvent extends GriiotEvent {
  repo: string;
}
