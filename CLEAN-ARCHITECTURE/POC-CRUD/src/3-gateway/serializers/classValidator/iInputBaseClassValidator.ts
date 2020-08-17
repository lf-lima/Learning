import { validate } from 'class-validator'
import { IHttpResponseError } from '../../modules/errors/http/httpReponseErrors'
import { IInputBase } from '../base/iInputBase'

export type IInputBaseClassValidator = IInputBase<IHttpResponseError>

export class InputBaseClassValidator implements IInputBaseClassValidator {
  public hasError = false

  public async validate (): Promise<IHttpResponseError[]> {
    const httpResponseErrors: IHttpResponseError[] = []

    await validate(this, {
      validationError: {
        target: false,
        value: false
      }
    }).then(errors => {
      for (const error of errors) {
        httpResponseErrors.push({
          name: error.property,
          message: error.constraints
        })
      }
    })

    if (httpResponseErrors.length) {
      this.hasError = true
    }

    return httpResponseErrors
  }
}
