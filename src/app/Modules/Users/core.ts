import database from '../../../database';
import { IUser, IUserCreate, IUserUpdate, IResponseType } from './interface';
import { ICompany } from '../Companies/interface';

export const createUser = async (data: any, companies?: number[] | ICompany[]): Promise<IUser | null> => {
  const newUser = await database.user.create({
    data,
  });

  const userRelationed = await database.user.update({
    where: { 
      id: newUser.id,
    },
    data: { 
      companies: { set: [{ id: 1 }] },
    },
  });

  console.log(userRelationed);

  return userRelationed;
};

export const updateUser = async (id: number, data: any): Promise<IUser | null> => {
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


export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  const user = await database.user.findUnique({
    where: { email: email.toLocaleLowerCase() },
  });
  return user;
};

export const getUsers = async (page?: number, limit?: number, listAll?: boolean, query?: any): Promise<IResponseType | IUser[]> => {
  const pageSelected = page || 1;
  const limitSelected = limit || 10;
  const numberToSkip = (pageSelected - 1) * limitSelected;

  const listAllSanitized = listAll && JSON.parse(`${listAll}`) === true; // The listAll is comming as a string :(

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
    pages: Math.ceil(usersTotal / usersTotal),
  };
};