import { ServicesStatusType } from '../../core';

export interface GriiotDatabase {
  uri: string;
  name?: string;
  status?: ServicesStatusType;
}
