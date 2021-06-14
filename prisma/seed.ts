import database from '../src/database';
import { cryptPassword } from '../src/app/Modules/Authentication/core';

export const main = async () => {
  console.log('Seeding tables');
  await database.module.upsert({
    where: { name: 'Clientes' },
    update: {},
    create: {
      active: true,
      name: 'Clientes',
      key: 'clients',
    },
  });

  await database.module.upsert({
    where: { name: 'Usuários' },
    update: {},
    create: {
      active: true,
      name: 'Usuários',
      key: 'users',
    },
  });

  await database.module.upsert({
    where: { name: 'Padarias' },
    update: {},
    create: {
      active: true,
      name: 'Padarias',
      key: 'customers',
    },
  });

  await database.module.upsert({
    where: { name: 'Perfis' },
    update: {},
    create: {
      active: true,
      name: 'Perfis',
      key: 'roles',
    },
  });

  await database.module.upsert({
    where: { name: 'Itens' },
    update: {},
    create: {
      active: true,
      name: 'Itens',
      key: 'items',
    },
  });

  await database.module.upsert({
    where: { name: 'Fornecedores' },
    update: {},
    create: {
      active: true,
      name: 'Fornecedores',
      key: 'providers',
    },
  });

  await database.module.upsert({
    where: { name: 'Máquinas de cartão' },
    update: {},
    create: {
      active: true,
      name: 'Máquinas de cartão',
      key: 'paymentMachines',
    },
  });
  
  const adminRole = await database.role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: {
      active: true,
      name: 'ADMIN',
      description: '',
      deleted: false,
      receiveAdminEmails: true,
      allCustomersAccess: true,
      settingsAccess: true,
      permissions: JSON.stringify({
        customers: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        users: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        bakeries: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        roles: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        providers: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        items: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        paymentMachines: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
      }),
    },
  });
  
  await database.role.upsert({
    where: { name: 'CLIENTE' },
    update: {},
    create: {
      active: true,
      name: 'CLIENTE',
      description: '',
      deleted: false,
      receiveAdminEmails: false,
      allCustomersAccess: false,
      settingsAccess: false,
      permissions: JSON.stringify({
        customers: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        users: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        bakeries: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        roles: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        providers: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        items: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
        paymentMachines: {
          create: true,
          update: true,
          read: true,
          delete: true,
        },
      }),
    },
  });

  await database.user.upsert({
    where: { email: 'admin@admin.com.br' },
    update: {},
    create: {
      active: true,
      name: 'ADMIN',
      email: 'admin@admin.com.br',
      password: await cryptPassword('123'), // Encrypt the user password
      phone: '(81) 91929-9129',
      rolesId: adminRole.id,
    },
  });

  await database.company.upsert({
    where: { cnpj: '123' },
    update: {},
    create: {
      active: true,
      name: 'Company test',
      cnpj: '123',
      document: '321',
      email: 'comany@gmail.com',
      phone: '(21) 98120-9129',
      address: 'Address',
      number: '10A',
    },
  });
};

main().then(() => {
  console.log('Seeding the files');
}).catch(err => {
  console.log('Error seeding the files', err);
}).finally(() => {
  console.log('Finishing the database connection!');
  database.$disconnect();
})

