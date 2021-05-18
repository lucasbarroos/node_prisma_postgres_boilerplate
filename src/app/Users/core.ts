import database from '../../database';
import { IUser, IResponseType } from './interface';

export const createUser = async (data: IUser): Promise<IUser | null> => {
  const newUser = await database.user.create({
    data,
  });
  return newUser;
};

export const updateUser = async (id: number, data: IUser): Promise<IUser | null> => {
  const user = await database.user.update({
    where: {
      id: parseInt(`${id}`),
    },
    data,
  });

  return user;
};

export const getUserById = async (id: number): Promise<IUser | null> => {
  const user = await database.user.findUnique({
    where: { id: parseInt(`${id}`) },
    include: {
      role: true,
    },
  });
  return user;
};


export const getUsers = async (page?: number, limit?: number, listAll?: boolean, query?: any): Promise<IResponseType | IUser[]> => {
  const pageSelected = page || 1;
  const limitSelected = limit || 10;
  const numberToSkip = (pageSelected - 1) * limitSelected;

  const listAllSanitized = listAll && JSON.parse(`${listAll}`) === true; // The listAll is comming as a string :(
  
  console.log(query);
  
  if (listAllSanitized) {
    const users = await database.user.findMany({
      skip: numberToSkip,
      take: parseInt(`${limit}`) || 10,
      where: {
        name: {
          contains: query,
        },
      },
      include: {
        role: true,
      },
      orderBy: {
        name: 'asc',
      },
    });
    
    return users;
  }

  const usersTotal = await database.user.count({
    where: {
      name: {
        contains: query,
      },
    },
  });
  const users = await database.user.findMany({
    skip: numberToSkip,
    take: parseInt(`${limit}`) || 10,
    where: {
      name: {
        contains: query,
      },
    },
    include: {
      role: true,
    },
    orderBy: {
      name: 'asc',
    },
  });

  return {
    docs: users,
    page: pageSelected,
    limit: limitSelected,
    total: usersTotal,
    pages: Math.ceil(usersTotal/usersTotal),
  };
};