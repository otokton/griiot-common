import { MessageType } from '../enums';

export class HandlerException extends Error {
  _type: MessageType;
  constructor(type: MessageType, message: string) {
    super(message);
    this._type = type;
  }
}
