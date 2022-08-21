export interface GriiotKong {
  serviceId: string;
  serviceName: string;
  routeId: string;
  routeName: string;
  routePath: string;
  url: string;
}

export interface GriiotService {
  id?: string | null;
  name: string;
  parent: string;
  resource: string;
  gcpUrl?: string | null;
  griiotKong?: GriiotKong;
}
