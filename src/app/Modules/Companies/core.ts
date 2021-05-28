import database from '../../../database';
import { ICompany, ICompanyCreate, IResponseType } from './interface';
import { Company } from '@prisma/client'

export const createCompany = async (data: ICompanyCreate): Promise<ICompany | null> => {
  const newCompany = await database.company.create({
    data,
  });
  return newCompany;
};

export const updateCompany = async (id: number, data: ICompany): Promise<ICompany | null> => {
  const company = await database.company.update({
    where: {
      id: parseInt(`${id}`),
    },
    data,
  });

  return company;
};

export const getCompanyById = async (id: number): Promise<ICompany | null> => {
  const company = await database.company.findUnique({
    where: { id: parseInt(`${id}`) },
  });
  return company;
};

export const getCompanys = async (page?: number, limit?: number, listAll?: boolean, query?: any): Promise<IResponseType | ICompany[]> => {
  const pageSelected = page || 1;
  const limitSelected = limit || 10;
  const numberToSkip = (pageSelected - 1) * limitSelected;

  const listAllSanitized = listAll && JSON.parse(`${listAll}`) === true; // The listAll is comming as a string :(

  if (listAllSanitized) {
    const companies = await database.company.findMany({
      skip: numberToSkip,
      take: parseInt(`${limit}`) || 10,
      where: {
        name: {
          contains: query,
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return companies;
  }

  const companiesTotal = await database.company.count({
    where: {
      name: {
        contains: query,
      },
    },
  });

  const companies = await database.company.findMany({
    skip: numberToSkip,
    take: parseInt(`${limit}`) || 10,
    where: {
      name: {
        contains: query,
      },
    },
    orderBy: {
      name: 'asc',
    },
  });

  return {
    docs: companies,
    page: pageSelected,
    limit: limitSelected,
    total: companiesTotal,
    pages: Math.ceil(companiesTotal / companiesTotal),
  };
};