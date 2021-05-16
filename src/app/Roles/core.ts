import database from '../../database';
import { IRole } from './interface';

export const createRole = async (data: IRole): Promise<IRole | null> => {
  const newRole = await database.role.create({
    data,
  });
  return newRole;
};

export const updateRole = async (id: number, data: IRole): Promise<IRole | null> => {
  const role = await database.role.update({
    where: {
      id: parseInt(`${id}`),
    },
    data,
  });

  return role;
};

export const getRoleById = async (id: number): Promise<IRole | null> => {
  const role = await database.role.findUnique({
    where: { id: parseInt(`${id}`) },
  });
  return role;
};

export const getRoles = async (page?: number, limit?: number, listAll?: boolean, query?: any): Promise<IRole[]> => {
  const roles = await database.role.findMany({});
  return roles;
};