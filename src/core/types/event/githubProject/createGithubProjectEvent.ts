import { GriiotEvent } from '../griiotEvent';
import { GithubProject, GithubProjectInput } from './githubProject';

export interface CreateGithubProjectEvent
  extends GriiotEvent<GithubProjectInput> {}

export interface GithubProjectEvent extends GriiotEvent<GithubProject> {}
