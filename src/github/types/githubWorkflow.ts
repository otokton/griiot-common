import { WorkflowStatusType } from '../enums/workflowStatusType';

export interface GriiotSecret {
  name: string;
  value: string;
}
export interface GriiotWorkflow {
  lastRunId: number;
  status: WorkflowStatusType;
  secrets: GriiotSecret[];
}
