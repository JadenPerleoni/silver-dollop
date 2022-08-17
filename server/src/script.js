// 1
const { PrismaClient } = require("@prisma/client");

// 2
const prisma = new PrismaClient();

// 3
async function main() {
  const newUser = await prisma.user.create({
    data: {
      username: "nadej",
      password: "swagman",
      email: "yoman@gmail.com",
    },
  });
  const user = await prisma.user.findUnique({
    where: { email: "kk@gmail.com" },
  });
  if (!user) {
    throw new Error("No such user found");
  }
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  console.log(user.username);
}

// 4
main()
  .catch((e) => {
    throw e;
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect();
  });
