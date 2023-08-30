import { GriiotEvent } from '../griiotEvent';
import { GithubRun, GithubRunInput } from './gcloudRun';

export interface DeployGcloudRunEvent extends GriiotEvent<GithubRunInput> {}

export interface GithubRunEvent extends GriiotEvent<GithubRun> {}
