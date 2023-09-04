import { GriiotEvent } from '../griiotEvent';
import { GithubProjectRepo } from './githubProject';

export interface DeleteGithubProjectEvent
  extends GriiotEvent<GithubProjectRepo> {}
