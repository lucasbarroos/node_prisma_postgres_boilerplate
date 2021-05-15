import { User as IUserInterface } from '@prisma/client';

export const createUser = (data: IUserInterface) => {
  // Action to create the user
};

export const updateUser = (data: IUserInterface) => {
  // Action to update the user
};

export const getUserById = (id: number): IUserInterface => {
  // Action to get the user by id

  return {
    id: 1,
    name: 'Lucas',
    email: 'lbarros.comp@gmail.com',
    phone: '(81)81728-1820',
    roleId: 1,
  };
};

export const getUsers = (page: number, limit: number, query: any): [IUserInterface] => {
  // Action to get all the users paginated of with listall

  return [{
    id: 1,
    name: 'Lucas',
    email: 'lbarros.comp@gmail.com',
    phone: '(81)81728-1820',
    roleId: 1,
  }];
};