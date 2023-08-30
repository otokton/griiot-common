import { GriiotSchemaItem } from '../../../../schematic';

export interface GithubProjectInput {
  name: string;
  mongodbUri: string;
  schema: GriiotSchemaItem;
}

export interface GithubProject {
  repo: string;
}

export interface GithubProjectRepo {
  repo: string;
}
