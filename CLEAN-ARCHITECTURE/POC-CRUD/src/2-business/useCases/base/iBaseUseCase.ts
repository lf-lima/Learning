export interface IBaseUseCase<TDTO, TReturn> {
  run(dto: TDTO): Promise<TReturn>
}
