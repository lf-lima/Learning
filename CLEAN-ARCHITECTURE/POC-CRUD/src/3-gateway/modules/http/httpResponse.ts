export interface IHttpResponse {
  statusCode: number,
  message: string,
  body: any
}
// generic class
class HttpResponse implements IHttpResponse {
  public statusCode!: number

  public message!: string

  public body!: any

  constructor (obj: Partial<HttpResponse>) {
    Object.assign(this, obj)
  }
}

export class HttpSuccessResponse extends HttpResponse {
  constructor (body: any) {
    super({ statusCode: 200, message: 'Success', body })
  }
}

export class HttpInternalErrorResponse extends HttpResponse {
  constructor (body: any) {
    super({ statusCode: 500, message: 'Server Internal Error', body })
  }
}

export class HttpUnauthorizedResponse extends HttpResponse {
  constructor (body: any) {
    super({ statusCode: 401, message: 'Unauthorized', body })
  }
}

export class HttpBadRequestResponse extends HttpResponse {
  constructor (body: any) {
    super({ statusCode: 400, message: 'Bad Request', body })
  }
}
