export interface IUser {
  active?: boolean
  id?: number
  email: string
  name: string
  password: string
  phone?: string
  roleId?: number
}
export interface IResponseType {
  total: number
  docs: IUser[]
  page: number
  limit: number
  pages: number
}
