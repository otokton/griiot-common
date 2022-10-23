import { GriiotGloud } from '../../gcloud';
import { GriiotKong } from '../../kong/types/griiotKong';

export interface GriiotService {
  kong?: GriiotKong;
  gcloud?: GriiotGloud;
}
