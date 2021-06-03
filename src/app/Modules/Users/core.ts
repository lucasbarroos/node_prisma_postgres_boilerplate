import database from '../../../database';
import { IUser, IResponseType } from './interface';
import { ICompany } from '../Companies/interface';

const relationHelper = (data: any[] = []) => ({
  set: data.map((item) => {
    if (Number.isInteger(item)) {
      return { id: item };
    }
    return { id: item.id };
  })
});

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

  return userRelationed;
};

export const updateUser = async (id: number, data: any, companies?: number[] | ICompany[]): Promise<IUser | null> => {
  const user = await database.user.update({
    where: {
      id: parseInt(`${id}`),
    },
    data,
  });

  const userRelationed = await database.user.update({
    where: {
      id: user.id,
    },
    data: {
      companies: relationHelper(companies),
    },
  });

  return userRelationed;
};

export const getUserById = async (id: number): Promise<IUser | null> => {
  const user = await database.user.findUnique({
    where: { id: parseInt(`${id}`) },
    select: {
      id: true,
      active: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      companies: true,
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
      select: {
        id: true,
        active: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        companies: true,
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
    select: {
      id: true,
      active: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      companies: true,
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