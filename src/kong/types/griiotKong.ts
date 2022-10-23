import { ServicesStatusType } from '../../core';

export interface GriiotKong {
  serviceId: string;
  serviceName: string;
  routeId: string;
  routeName: string;
  routePath: string;
  url: string;
  status?: ServicesStatusType;
}
