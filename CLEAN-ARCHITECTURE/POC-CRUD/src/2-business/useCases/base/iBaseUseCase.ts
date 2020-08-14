export interface IBaseUseCase<TRepository, TDTO, TModel> {
  repository: TRepository
  run(dto: TDTO): Promise<TModel>
}
