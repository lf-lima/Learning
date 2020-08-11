export interface IInputBase {
  hasError: boolean
  validate(): Promise<any[]>
}
