import { GriiotSchemaItem } from '../../../../schematic';
import { GriiotEvent } from '../griiotEvent';

export interface CreateGithubProjectEvent extends GriiotEvent {
  name: string;
  mongodbUri: string;
  schema: GriiotSchemaItem;
}

export interface GithubProjectEvent extends GriiotEvent {
  gitUrl: string;
}
