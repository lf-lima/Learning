import { IBaseOperation } from '../../base/iBaseOperation'

export interface IBaseOperationAdapter {
  adapt(operation: IBaseOperation): any
}
