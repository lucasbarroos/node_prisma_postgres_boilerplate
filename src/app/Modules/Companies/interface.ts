import { Prisma } from '@prisma/client';

export interface ICompanyCreate {
  active: boolean
  name: string
  cnpj: string
  document?: string | null
  email?: string | null
  phone?: string | null
  address?: string | null
  number?: string | null
  metadata?: Prisma.JsonValue | null
}
export interface ICompany {
  id: number
  active: boolean
  name: string
  cnpj: string
  document?: string | null
  email?: string | null
  phone?: string | null
  address?: string | null
  number?: string | null
  metadata?: Prisma.JsonValue | null
}
export interface IResponseType {
  total: number
  docs: ICompany[]
  page: number
  limit: number
  pages: number
}
