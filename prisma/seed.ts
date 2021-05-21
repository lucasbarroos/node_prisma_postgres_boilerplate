import database from '../src/database';

export const main = async () => {
  console.log('Seeding tables');
  await database.role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: {
      active: true,
      name: 'ADMIN',
      deleted: false,
      receive_admin_emails: true,
      permissions: {
        allBakeries: true,
        settings: true,
        customers: {
            create: true,
            update: true,
            read: true,
            delete: true,
        },
      },
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
//     customers: {
//       create: { type: Boolean, default: false },
//       update: { type: Boolean, default: false },
//       read: { type: Boolean, default: false },
//       delete: { type: Boolean, default: false },
//     },
//     users: {
//       create: { type: Boolean, default: false },
//       update: { type: Boolean, default: false },
//       read: { type: Boolean, default: false },
//       delete: { type: Boolean, default: false },
//     },
//     bakeries: {
//       create: { type: Boolean, default: false },
//       update: { type: Boolean, default: false },
//       read: { type: Boolean, default: false },
//       delete: { type: Boolean, default: false },
//     },
//     roles: {
//       create: { type: Boolean, default: false },
//       update: { type: Boolean, default: false },
//       read: { type: Boolean, default: false },
//       delete: { type: Boolean, default: false },
//     },
//     providers: {
//       create: { type: Boolean, default: false },
//       update: { type: Boolean, default: false },
//       read: { type: Boolean, default: false },
//       delete: { type: Boolean, default: false },
//     },
//     items: {
//       create: { type: Boolean, default: false },
//       update: { type: Boolean, default: false },
//       read: { type: Boolean, default: false },
//       delete: { type: Boolean, default: false },
//     },
//     paymentMachines: {
//       create: { type: Boolean, default: false },
//       update: { type: Boolean, default: false },
//       read: { type: Boolean, default: false },
//       delete: { type: Boolean, default: false },
//     },
//   },
