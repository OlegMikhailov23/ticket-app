import { CustomError } from "./custom-error";

export class DBConnectionError extends CustomError {
  reason = "Error connection to DB";
  statusCode = 500;

  constructor() {
    super('Error connecting to DB');

    // Only cause we are extending a built in class
    Object.setPrototypeOf(this, DBConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ] as ({ message: any; field: string } | undefined)[];
  }
}
