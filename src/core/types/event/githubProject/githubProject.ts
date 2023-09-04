import { SchemaOpenApi } from '../../../../schematic';

export interface GithubProjectInput {
  name: string;
  mongodbUri: string;
  schema: SchemaOpenApi;
}

export interface GithubProject {
  gitUrl: string;
}

export interface GithubProjectRepo {
  repo: string;
}
