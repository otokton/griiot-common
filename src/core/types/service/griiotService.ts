import { GriiotGloud } from '../../../gcloud';
import { GriiotKong } from '../../../kong';

export interface GriiotService {
  kong?: GriiotKong;
  gcloud?: GriiotGloud;
}
