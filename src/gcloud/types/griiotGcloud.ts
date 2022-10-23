import { ServicesStatusType } from '../../core';

export interface GriiotGloud {
  id?: string | null;
  name: string;
  parent: string;
  resource: string;
  url?: string | null;
  status?: ServicesStatusType;
}
