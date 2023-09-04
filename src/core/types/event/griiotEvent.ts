import { MessageType } from '../../enums';

export interface GriiotEvent<T> {
  id: string;
  data?: T;
  type: MessageType;
}
