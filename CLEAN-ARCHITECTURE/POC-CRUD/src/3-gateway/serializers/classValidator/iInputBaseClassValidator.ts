import { validate, ValidationError } from 'class-validator'
import { IInputBase } from '../base/iInputBase'

export interface IInputBaseClassValidator extends IInputBase {
  validate(): Promise<ValidationError[]>
}

export class InputBaseClassValidator implements IInputBaseClassValidator {
  public hasError = false

  public async validate (): Promise<ValidationError[]> {
    const errors = await validate(this, {
      validationError: {
        target: false,
        value: false
      }
    }).then(errors => errors)

    if (errors.length) {
      this.hasError = true
    }

    return errors
  }
}
