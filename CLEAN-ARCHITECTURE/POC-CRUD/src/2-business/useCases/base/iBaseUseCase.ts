export interface IBaseUseCase {
  repository: any
  run(dto: any): Promise<any>
}
