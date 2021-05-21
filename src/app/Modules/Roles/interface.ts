export interface IRole {
  id?: number
  active: boolean
  name: string
  description: string | null
  receive_admin_emails?: boolean
  permissions: any
  deleted: boolean
}
export interface IResponseType {
  total: number
  docs: IRole[]
  page: number
  limit: number
  pages: number
}
