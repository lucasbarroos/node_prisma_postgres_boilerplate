import { User } from '@prisma/client';

export interface IUser {
  active?: boolean;
  id?: number
  email: string
  name: string | null
  phone: string | null
  roleId: number | null
}