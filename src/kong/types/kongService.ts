export interface KongService {
  id: string;
  retries: number;
  write_timeout: number;
  port: number;
  tls_verify: string;
  tls_verify_depth: string;
  enabled: boolean;
  tags: string;
  ca_certificates: string;
  name: string;
  path: string;
  connect_timeout: number;
  updated_at: number;
  created_at: number;
  read_timeout: number;
  client_certificate: string;
  host: string;
  protocol: string;
}
