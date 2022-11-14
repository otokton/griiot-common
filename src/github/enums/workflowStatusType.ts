export enum WorkflowStatusType {
  COMPLETED = 'completed',
  ACTION_REQUIRED = 'action_required',
  CANCELLED = 'cancelled',
  FAILURE = 'failure',
  NEUTRAL = 'neutral',
  SKIPPED = 'skipped',
  STALE = 'stale',
  SUCCESS = 'success',
  TIMEOUT = 'timed_out',
  IN_PROGRESS = 'in_progress',
  QUEUED = 'queued',
  REQUESTED = 'requested',
  WAITING = 'waiting'
}

export const WORKFLOW_RUNNING_STATUS = [
  WorkflowStatusType.QUEUED,
  WorkflowStatusType.REQUESTED,
  WorkflowStatusType.WAITING,
  WorkflowStatusType.IN_PROGRESS
];

export const WORKFLOW_FINISH_STATUS = [
  WorkflowStatusType.COMPLETED,
  WorkflowStatusType.ACTION_REQUIRED,
  WorkflowStatusType.CANCELLED,
  WorkflowStatusType.FAILURE,
  WorkflowStatusType.NEUTRAL,
  WorkflowStatusType.SKIPPED,
  WorkflowStatusType.SUCCESS,
  WorkflowStatusType.TIMEOUT
];
