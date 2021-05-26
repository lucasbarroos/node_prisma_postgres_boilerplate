import { createRole, getRoles, getRoleById, updateRole } from './core';
import { IRole } from './interface';

export const store = async (request: { body: IRole }, response: any) => {
  const { active, name, description, permissions, deleted, receiveAdminEmails, allCustomersAccess, settingsAccess } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const user = await createRole({ active, name, description, permissions, deleted, receiveAdminEmails, allCustomersAccess, settingsAccess });
  return response.send(user);
};

export const update = async (request: { params: { id: number }, body: IRole }, response: any) => {
  const { id, active, name, description, permissions, receiveAdminEmails, deleted, allCustomersAccess, settingsAccess } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const role = await updateRole(request.params.id, { id, active, name, description, receiveAdminEmails, permissions, deleted, allCustomersAccess, settingsAccess });
  return response.send(role);
};

export const index = async (request: { params: { id: number } }, response: any) => {
  const role = await getRoleById(request.params.id);
  if (!role) {
    return response.status(404).send({ message: 'Role not found' });
  }
  return response.send(role);
};

export const show = async (request: any, response: any) => {
  const { page, limit, listAll, query } = request.query;
  const roles = await getRoles(page, limit, listAll, query);
  return response.send(roles);
};