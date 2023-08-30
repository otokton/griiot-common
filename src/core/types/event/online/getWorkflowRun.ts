import { GriiotEvent } from '../griiotEvent';
import { WorkflowRun, WorkflowRunInput } from './gcloudRun';

export interface GetWorkflowRunEvent extends GriiotEvent<WorkflowRunInput> {}

export interface WorkflowRunEvent extends GriiotEvent<WorkflowRun> {
  conclusion: string;
}
