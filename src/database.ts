import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Setting the database as a global instance
const globalAny:any = global;
globalAny.database = prisma;

export default prisma;
