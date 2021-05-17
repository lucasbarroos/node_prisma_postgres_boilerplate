import { createUser, getUsers, getUserById, updateUser } from './core';

export const store = async (request: { body: { active: boolean; name: string; email: string; phone: string; roleId: number }; }, response: any) => {
  const { active, email, name, phone, roleId } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const user = await createUser({ active, email, name, phone, roleId });
  return response.send(user);
};

export const update = async (request: { params: { id: number }, body: { active: boolean; name: string; email: string; phone: string; roleId: number }; }, response: any) => {
  const { active, email, name, phone, roleId } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const role = await updateUser(request.params.id, { active, email, name, phone, roleId });
  return response.send(role);
};

export const index = async (request: { params: { id: number } }, response: any) => {
  const role = await getUserById(request.params.id);
  if (!role) {
    return response.status(404).send({ message: 'User not found' });
  }
  return response.send(role);
};

export const show = async (request: any, response: any) => {
  const { page, limit, listAll, query } = request.query;
  const roles = await getUsers(page, limit, listAll, query);
  return response.send(roles);
};