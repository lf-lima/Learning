import { IBaseRouter } from '../routers/base/iBaseRouter'
import { UserRouter } from '../routers/userRouter'

export const routers: IBaseRouter[] = [new UserRouter()]
