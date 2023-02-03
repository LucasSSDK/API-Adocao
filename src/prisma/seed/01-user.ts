import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

<<<<<<< HEAD
export const users: Prisma.UserCreateInput[] = [
  {
    id: ' ',
    nickname: ' ',
    name: 'Lucas Santos',
    description: ' ',
    idade: 26,
    email: 'lucas@gmail.com',
    password: '@abc',
    cpf: '99999999999',
=======


export const users: Prisma.UserCreateInput[] = [
  {
    nickname: 'Lucasss',
    name: 'Lucas Soares',
    password: 'Abcd@1234',
    image: '',
>>>>>>> 038756978c10f8030aa1a3dde8cf0619a26cd669
  },
];

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: { nickname: obj.nickname },
      update: {},
      create: {
        ...obj,
        password: await bcrypt.hash(obj.password, 10),
      },
    });
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 038756978c10f8030aa1a3dde8cf0619a26cd669
