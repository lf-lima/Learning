export interface IHttpResponseError {
  name: string,
  message: { [type: string]: string; } | undefined
}

export class HttpResponseError {
  public name!: string
  public message!: string | string[]

  constructor (obj: Partial<HttpResponseError>) {
    Object.assign(this, obj)
  }
}
