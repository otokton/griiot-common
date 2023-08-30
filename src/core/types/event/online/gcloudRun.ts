export interface Secret {
  name: string;
  value: string;
}

export interface GithubRunInput {
  name: string;
  service: { parent: string; name: string };
}

export interface WorkflowRunInput {
  name: string;
  runId: number;
}

export interface WorkflowRun {
  conclusion: string;
}

export interface GcloudRunInput {
  name: string;
}

export interface GithubRun {
  lastRunId?: number;
  secrets?: Secret[];
}
