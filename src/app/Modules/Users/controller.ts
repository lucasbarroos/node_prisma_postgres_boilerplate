import { createUser, getUsers, getUserById, updateUser } from './core';
import { cryptPassword } from '../Authentication/core';
import { IUserCreate, IUser } from './interface';

export const store = async (request: { body: IUserCreate }, response: any) => {
  const { active, email, name, phone, rolesId, password, companies } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const user = await createUser({ active, email: email.toLocaleLowerCase(), name, phone, rolesId, password: await cryptPassword(password) }, companies);
  return response.send(user);
};

export const update = async (request: { params: { id: number }, body: IUser }, response: any) => {
  const { active, email, name, phone, rolesId, companies } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const user = await updateUser(request.params.id, { active, email: email.toLocaleLowerCase(), name, phone, rolesId }, companies);
  return response.send(user);
};

export const index = async (request: { params: { id: number } }, response: any) => {
  const user = await getUserById(request.params.id);
  if (!user) {
    return response.status(404).send({ message: 'User not found' });
  }
  return response.send(user);
};

export const show = async (request: any, response: any) => {
  const { page, limit, listAll, query } = request.query;
  const roles = await getUsers(page, limit, listAll, query);
  return response.send(roles);
};