export interface IHttpResponse<T> {
  statusCode: number,
  message: string,
  body: T,
  hasError: boolean
}

export class HttpResponse<T> implements IHttpResponse<T> {
  public statusCode!: number

  public message!: string

  public body!: T

  public hasError!: boolean
}
