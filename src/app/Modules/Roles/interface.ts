export interface IRole {
  id?: number
  active: boolean
  name: string
  description?: string
  receive_admin_emails?: boolean
  deleted: boolean
  permissions: any
  settingsAccess: boolean
  allCustomersAccess: boolean
}
export interface IResponseType {
  total: number
  docs: IRole[]
  page: number
  limit: number
  pages: number
}
