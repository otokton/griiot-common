export const GCLOUD_SERVICE_TEMPLATE = {
  conditions: [
    {
      type: 'RoutesReady',
      state: 'CONDITION_SUCCEEDED',
      message: '',
      lastTransitionTime: {
        seconds: '1658652385',
        nanos: 184339000
      },
      severity: 'SEVERITY_UNSPECIFIED'
    },
    {
      type: 'ConfigurationsReady',
      state: 'CONDITION_SUCCEEDED',
      message: '',
      lastTransitionTime: {
        seconds: '1658652384',
        nanos: 906337000
      },
      severity: 'SEVERITY_UNSPECIFIED'
    }
  ],
  name: '',
  labels: {},
  annotations: {
    'client.knative.dev/user-image':
      'us-docker.pkg.dev/cloudrun/container/hello'
  },
  ingress: 'INGRESS_TRAFFIC_ALL',
  launchStage: 'GA',
  template: {
    containers: [
      {
        command: [],
        args: [],
        env: [],
        ports: [
          {
            name: 'http1',
            containerPort: 8080
          }
        ],
        volumeMounts: [],
        name: '',
        image: 'us-docker.pkg.dev/cloudrun/container/hello',
        resources: {
          limits: {
            cpu: '1000m',
            memory: '512Mi'
          },
          cpuIdle: true
        }
      }
    ],
    scaling: {
      minInstanceCount: 0,
      maxInstanceCount: 100
    },
    timeout: {
      seconds: '300',
      nanos: 0
    },
    executionEnvironment: 'EXECUTION_ENVIRONMENT_UNSPECIFIED',
    maxInstanceRequestConcurrency: 80
  },
  observedGeneration: '1',
  terminalCondition: {
    type: 'Ready',
    state: 'CONDITION_SUCCEEDED',
    severity: 'SEVERITY_UNSPECIFIED'
  },
  reconciling: false
};
