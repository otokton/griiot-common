import { GriiotService } from '../../gcloud/types/griiotService';
import { GriiotDatabase } from '../../mongodb/types/database';
import { GriiotGithubProject } from '../../schematic/types/githubProject';

export interface Infra {
  _id: string;
  schemaId: string;
  service?: GriiotService;
  database?: GriiotDatabase;
  githubProject?: GriiotGithubProject;
}
