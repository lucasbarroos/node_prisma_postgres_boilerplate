import { Role as IRoleInterface } from '@prisma/client';

export const createRole = (data: IRoleInterface) => {
  // Action to create the user
};

export const updateRole = (data: IRoleInterface) => {
  // Action to update the user
};

export const getRoleById = (id: number): IRoleInterface => {
  // Action to get the user by id

  return {
    id: 1,
    active: true,
    name: 'ADM',
    description: 'Test Description',
  };
};

export const getRoles = (page: number, limit: number, query: any): [IRoleInterface] => {
  // Action to get all the users paginated of with listall

  return [{
    id: 1,
    active: true,
    name: 'ADM',
    description: 'Test Description',
  }];
};