import { AbstractType } from './abstractType';

export abstract class AbstractModel extends AbstractType {
  mainIndex?: string;
  coords?: number[];
}
