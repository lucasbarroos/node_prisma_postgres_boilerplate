import { ICompany } from '../Companies/interface';
export interface IUserCreate {
  active?: boolean
  email: string
  name: string
  password: string
  phone?: string | null
  role?: number
  roleId?: number | null
}
export interface IUserUpdate {
  active?: boolean
  id?: number
  email: string
  name: string
  phone?: string | null
  roleId?: number | null
}

export interface IUser {
  active?: boolean
  id?: number
  email: string
  name: string
  password: string
  phone?: string | null
  roleId?: number | null
  companies?: number[] | ICompany[]
}
export interface IResponseType {
  total: number
  docs: IUser[]
  page: number
  limit: number
  pages: number
}
