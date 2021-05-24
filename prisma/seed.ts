import database from '../src/database';

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
  
  await database.role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: {
      active: true,
      name: 'ADMIN',
      description: '',
      deleted: false,
      receive_admin_emails: true,
      permissions: JSON.stringify({
        customers: {
          create: { type: Boolean, default: false },
          update: { type: Boolean, default: false },
          read: { type: Boolean, default: false },
          delete: { type: Boolean, default: false },
        },
        users: {
          create: { type: Boolean, default: false },
          update: { type: Boolean, default: false },
          read: { type: Boolean, default: false },
          delete: { type: Boolean, default: false },
        },
        bakeries: {
          create: { type: Boolean, default: false },
          update: { type: Boolean, default: false },
          read: { type: Boolean, default: false },
          delete: { type: Boolean, default: false },
        },
        roles: {
          create: { type: Boolean, default: false },
          update: { type: Boolean, default: false },
          read: { type: Boolean, default: false },
          delete: { type: Boolean, default: false },
        },
        providers: {
          create: { type: Boolean, default: false },
          update: { type: Boolean, default: false },
          read: { type: Boolean, default: false },
          delete: { type: Boolean, default: false },
        },
        items: {
          create: { type: Boolean, default: false },
          update: { type: Boolean, default: false },
          read: { type: Boolean, default: false },
          delete: { type: Boolean, default: false },
        },
        paymentMachines: {
          create: { type: Boolean, default: false },
          update: { type: Boolean, default: false },
          read: { type: Boolean, default: false },
          delete: { type: Boolean, default: false },
        },
      }),
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

// permissions: {
//     allBakeries: { type: Boolean, default: false },
//     settings: { type: Boolean, default: false },

