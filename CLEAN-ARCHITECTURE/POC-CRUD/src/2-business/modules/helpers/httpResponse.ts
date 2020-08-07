export interface IHttpResponse<T> {
  statusCode: number,
  message: string,
  body: T
}

export class HttpResponse<T> implements IHttpResponse<T> {
  public statusCode!: number

  public message!: string

  public body!: T

  constructor (obj: Partial<HttpResponse<T>>) {
    Object.assign(this, obj)
  }
}
