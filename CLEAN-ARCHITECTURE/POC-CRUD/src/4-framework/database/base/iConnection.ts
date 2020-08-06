import { IDBConfig } from './iConfig'

export interface IDBConnection {
  config: IDBConfig
  connect(): Promise<void>
}
