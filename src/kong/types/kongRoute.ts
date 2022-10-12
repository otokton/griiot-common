export interface KongRoute {
  id: string;
  paths: string[];
  methods: string;
  sources: string;
  destinations: string;
  request_buffering: boolean;
  response_buffering: boolean;
  regex_priority: number;
  https_redirect_status_code: number;
  preserve_host: boolean;
  snis: string;
  protocols: string[];
  tags: string;
  name: string;
  path_handling: string;
  headers: string[];
  strip_path: boolean;
  hosts: string[];
  service: {
    id: string;
  };
  created_at: number;
  updated_at: number;
}
