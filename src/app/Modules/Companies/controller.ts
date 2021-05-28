import { createCompany, getCompanys, getCompanyById, updateCompany } from './core';
import { ICompany } from './interface';

export const store = async (request: { body: ICompany }, response: any) => {
  const { active, name, description, permissions, deleted, receiveAdminEmails, allCustomersAccess, settingsAccess } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const user = await createCompany({ active, name, description, permissions, deleted, receiveAdminEmails, allCustomersAccess, settingsAccess });
  return response.send(user);
};

export const update = async (request: { params: { id: number }, body: ICompany }, response: any) => {
  const { id, active, name, description, permissions, receiveAdminEmails, deleted, allCustomersAccess, settingsAccess } = request.body;
  if (!name) {
    return response.status(400).send({ message: 'Invalid input data. Please, verify and try again.' });
  }
  const company = await updateCompany(request.params.id, { id, active, name, description, receiveAdminEmails, permissions, deleted, allCustomersAccess, settingsAccess });
  return response.send(company);
};

export const index = async (request: { params: { id: number } }, response: any) => {
  const company = await getCompanyById(request.params.id);
  if (!company) {
    return response.status(404).send({ message: 'Company not found' });
  }
  return response.send(company);
};

export const show = async (request: any, response: any) => {
  const { page, limit, listAll, query } = request.query;
  const companys = await getCompanys(page, limit, listAll, query);
  return response.send(companys);
};