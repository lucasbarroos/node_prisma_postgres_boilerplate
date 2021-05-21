export interface IRole {
  id?: number
  active: boolean
  name: string
  description: string | null
  permissions: any
}
export interface IResponseType {
  total: number
  docs: IRole[]
  page: number
  limit: number
  pages: number
}
