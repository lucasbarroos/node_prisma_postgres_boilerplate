import database from '../../database';
import { IUser } from './interface';

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

export const getUsers = async (page?: number, limit?: number, listAll?: boolean, query?: any): Promise<IUser[]> => {
  const users = await database.user.findMany({
    include: { 
      role: true,
    }
  });
  return users;
};