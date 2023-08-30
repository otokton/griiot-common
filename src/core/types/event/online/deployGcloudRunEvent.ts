import { GriiotEvent } from '../griiotEvent';

export interface Secret {
  name: string;
  value: string;
}

export interface DeployGcloudRunEvent extends GriiotEvent {
  name: string;
  service: { parent: string; name: string };
}

export interface GithubRunEvent extends GriiotEvent {
  lastRunId?: number;
  secrets?: Secret[];
}
