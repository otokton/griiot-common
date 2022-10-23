import { AbstractType } from '../../core/types/abstractType';
import { GriiotGloud } from '../../gcloud';
import { GriiotGithubProject } from '../../github/types/githubProject';
import { GriiotKong } from '../../kong/types/griiotKong';
import { GriiotDatabase } from '../../mongodb';
import { InfraStatusType } from '../enums/infraStatusType';

export interface GriiotInfra extends AbstractType {
  schemaId: string;
  kong: GriiotKong;
  gcloud: GriiotGloud;
  status: InfraStatusType;
  database: GriiotDatabase;
  github: GriiotGithubProject;
}
