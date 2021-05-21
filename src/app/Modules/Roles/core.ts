import database from '../../../database';
import { IRole, IResponseType } from './interface';

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


export const getRoles = async (page?: number, limit?: number, listAll?: boolean, query?: any): Promise<IResponseType | IRole[]> => {
  const pageSelected = page || 1;
  const limitSelected = limit || 10;
  const numberToSkip = (pageSelected - 1) * limitSelected;

  const listAllSanitized = listAll && JSON.parse(`${listAll}`) === true; // The listAll is comming as a string :(
  
  if (listAllSanitized) {
    const roles = await database.role.findMany({
      skip: numberToSkip,
      take: parseInt(`${limit}`) || 10,
      where: {
        name: {
          contains: query,
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
    
    return roles;
  }

  const rolesTotal = await database.role.count({
    where: {
      name: {
        contains: query,
      },
    },
  });
  
  const roles = await database.role.findMany({
    skip: numberToSkip,
    take: parseInt(`${limit}`) || 10,
    where: {
      name: {
        contains: query,
      },
    },
    orderBy: {
      name: 'asc',
    },
  });

  return {
    docs: roles,
    page: pageSelected,
    limit: limitSelected,
    total: rolesTotal,
    pages: Math.ceil(rolesTotal/rolesTotal),
  };
};