import { GriiotKong } from '../../kong/types/griiotKong';

export interface GriiotService {
  id?: string | null;
  name: string;
  parent: string;
  resource: string;
  gcpUrl?: string | null;
  griiotKong?: GriiotKong;
}
