export default class AppError extends Error {
  constructor(
    readonly message: string,
    readonly statusCode: number = 500,
  ) {
    super(message);
    this.name = "App Error";
  }
}
