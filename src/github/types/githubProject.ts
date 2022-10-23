import { ServicesStatusType } from '../../core';

export interface GriiotGithubProject {
  url: string;
  envVars: { key: string; value: string }[];
  status?: ServicesStatusType;
}
