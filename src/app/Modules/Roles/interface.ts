import { JsonValue } from '@prisma/client';

export interface IRoleCreate {
  active: boolean
  name: string
  description: string | null
  receiveAdminEmails: boolean | null
  deleted: boolean | null
  permissions: JsonValue | null
  settingsAccess: boolean | null
  allCustomersAccess: boolean | null
}
export interface IRole {
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
  docs: IRole[]
  page: number
  limit: number
  pages: number
}
