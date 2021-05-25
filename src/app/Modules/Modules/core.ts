import database from '../../../database';
import { IModule, IResponseType } from './interface';

export const createModule = async (data: IModule): Promise<IModule | null> => {
  const newModule = await database.module.create({
    data,
  });
  return newModule;
};

export const updateModule = async (id: number, data: IModule): Promise<IModule | null> => {
  const module = await database.module.update({
    where: {
      id: parseInt(`${id}`),
    },
    data,
  });

  return module;
};

export const getModuleById = async (id: number): Promise<IModule | null> => {
  const module = await database.module.findUnique({
    where: { id: parseInt(`${id}`) },
  });
  return module;
};


export const getModules = async (page?: number, limit?: number, listAll?: boolean, query?: any): Promise<IResponseType | IModule[]> => {
  const pageSelected = page || 1;
  const limitSelected = limit || 10;
  const numberToSkip = (pageSelected - 1) * limitSelected;

  const listAllSanitized = listAll && JSON.parse(`${listAll}`) === true; // The listAll is comming as a string :(
  
  if (listAllSanitized) {
    const roles = await database.module.findMany({
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

  const rolesTotal = await database.module.count({
    where: {
      name: {
        contains: query,
      },
    },
  });
  
  const roles = await database.module.findMany({
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