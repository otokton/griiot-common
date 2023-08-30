import { GriiotEvent } from '../griiotEvent';

export interface GetWorkflowRunEvent extends GriiotEvent {
  name: string;
  runId: number;
}

export interface WorkflowRunEvent extends GriiotEvent {
  conclusion: string;
}
