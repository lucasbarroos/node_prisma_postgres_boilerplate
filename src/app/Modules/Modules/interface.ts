export interface IModule {
  id?: number
  active: boolean
  name: string
  key: string
}
export interface IResponseType {
  total: number
  docs: IModule[]
  page: number
  limit: number
  pages: number
}
