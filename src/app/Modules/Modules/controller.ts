import { createModule, getModules, getModuleById, updateModule } from './core';
import { IModule } from './interface';

export const store = async (request: { body: IModule }, response: any) => {
  const { active, name, key } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const user = await createModule({ active, name, key });
  return response.send(user);
};

export const update = async (request: { params: { id: number }, body: IModule }, response: any) => {
  const { active, name, key } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const module = await updateModule(request.params.id, { active, name, key });
  return response.send(module);
};

export const index = async (request: { params: { id: number } }, response: any) => {
  const module = await getModuleById(request.params.id);
  if (!module) {
    return response.status(404).send({ message: 'Module not found' });
  }
  return response.send(module);
};

export const show = async (request: any, response: any) => {
  const { page, limit, listAll, query } = request.query;
  const modules = await getModules(page, limit, listAll, query);
  return response.send(modules);
};