import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });
  allUsers.forEach((user) => {
    console.log(user.posts);
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
