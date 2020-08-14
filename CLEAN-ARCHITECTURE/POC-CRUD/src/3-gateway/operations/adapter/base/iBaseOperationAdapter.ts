import { IBaseOperation } from '../../base/iBaseOperation'

export interface IBaseOperationAdapter<TRepository, TDTO, TResponse> {
  adapt(operation: IBaseOperation<TRepository, TDTO>): TResponse
}
