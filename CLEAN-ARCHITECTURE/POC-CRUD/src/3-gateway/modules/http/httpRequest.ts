export interface IHttpRequest<TBody> {
  body: TBody,
}

export class HttpRequest<TBody> implements IHttpRequest<TBody> {
  public body!: TBody

  constructor (obj: Partial<HttpRequest<TBody>>) {
    Object.assign(this, obj)
  }
}
