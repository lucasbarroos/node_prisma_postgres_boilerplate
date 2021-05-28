import { JsonValue } from '@prisma/client';

export interface ICompanyCreate {
  active: boolean
  name: string
  description: string | null
  receiveAdminEmails: boolean | null
  deleted: boolean | null
  permissions: JsonValue | null
  settingsAccess: boolean | null
  allCustomersAccess: boolean | null
}
export interface ICompany {
  id: number
  active: boolean
  name: string
  description: string | null
  receiveAdminEmails: boolean | null
  deleted: boolean | null
  permissions: JsonValue | null
  settingsAccess: boolean | null
  allCustomersAccess: boolean | null
}
export interface IResponseType {
  total: number
  docs: ICompany[]
  page: number
  limit: number
  pages: number
}
