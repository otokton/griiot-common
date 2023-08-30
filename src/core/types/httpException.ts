export class HttpException extends Error {
  private _status: number;

  constructor(status: number, message: string) {
    super(message);
    this._status = status;
  }

  get status(): number {
    return this._status;
  }

  set status(status: number) {
    this._status = status;
  }

  toObject(): Object {
    return {
      status: this._status,
      message: this.message
    };
  }
}
