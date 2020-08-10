export interface IHttpResponse {
  statusCode: number,
  message: string,
  body: any
}

export class HttpResponse implements IHttpResponse {
  public statusCode!: number

  public message!: string

  public body!: any

  constructor (obj: Partial<HttpResponse>) {
    Object.assign(this, obj)
  }
}
