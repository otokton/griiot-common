import { TechnicalMessageType } from '../enums/technicalMessageType';

export class WorkerException extends Error {
  private _type: TechnicalMessageType;
  private _id: string | number;
  constructor(
    type: TechnicalMessageType,
    id: string | number,
    message: string
  ) {
    super(message);
    this._id = id;
    this._type = type;
  }
  get type(): TechnicalMessageType {
    return this._type;
  }

  get id(): string | number {
    return this._id;
  }

  toObject(): Object {
    return {
      type: this._type,
      message: this.message
    };
  }
}
