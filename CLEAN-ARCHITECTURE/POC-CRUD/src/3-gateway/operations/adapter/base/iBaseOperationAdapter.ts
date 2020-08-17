import { IBaseOperation } from '../../base/iBaseOperation'

export interface IBaseOperationAdapter<TDTO, TReturnUseCase, TResponse> {
  adapt(operation: IBaseOperation<TDTO, TReturnUseCase>): TResponse
}
