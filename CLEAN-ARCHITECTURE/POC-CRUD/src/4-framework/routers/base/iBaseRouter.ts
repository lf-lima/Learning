import { IBaseOperationAdapter } from '../../../3-gateway/operations/adapter/base/iBaseOperationAdapter'

export interface IBaseRouter {
  router: any
  route: string
  operationAdapter: IBaseOperationAdapter
}
