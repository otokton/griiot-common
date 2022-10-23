import { RoleType } from '../../enums/roleType';
import { AbstractType } from '../abstractType';

export interface GriiotUser extends AbstractType {
  email: string;
  password: string;
  role?: RoleType;
  verify?: boolean;
  profile?: any;
  token?: string;
}
