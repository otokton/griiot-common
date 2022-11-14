import { ServicesStatusType } from '../../core';

export interface GriiotSecret {
  name: string;
  value: string;
}
export interface GriiotWorkflow {
  lastRunId: number;
  status: ServicesStatusType;
  secrets: GriiotSecret[];
}
