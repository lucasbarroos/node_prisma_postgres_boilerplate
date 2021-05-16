import { createRole, getRoles, getRoleById, updateRole } from './core';

export const store = async (request: { body: { active: any; name: any; description: any; }; }, response: any) => {
  const { active, name, description } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const user = await createRole({ active, name, description });
  return response.send(user);
};

export const update = async (request: any, response: any) => {
  const { active, name, description } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const role = await updateRole(request.params.id, { active, name, description });
  return response.send(role);
};

export const index = async (request: any, response: any) => {
  const role = await getRoleById(request.params.id);
  if (!role) {
    return response.status(404).send({ message: 'Role not found' });
  }
  return response.send(role);
};

export const show = async (request: any, response: any) => {
  const roles = await getRoles();
  return response.send(roles);
};