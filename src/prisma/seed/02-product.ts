import { Prisma, PrismaClient } from '@prisma/client';

<<<<<<< HEAD
export const products: Prisma.PetCreateInput[] = [
  {
    id: '01',
    name: 'Chiuaua',
    description: 'Pequeno porte, marrom com branco ',
    image: ' ',
    
    idade: 2,
    password:' @01abc',
=======
export const products: Prisma.ProductCreateInput[] = [
  {
    name: 'Papagaio',
    description: 'Mede entre 35 e 37 centímetros de comprimento e pesa cerca de 400 gramas. Se distingue pela cabeça amarela, com azul-esverdeado na fronte e bochecha, narinas escuras, ombros vermelhos delineados com amarelo, asa com parte vermelha e extremos azul-escuro. Resto do corpo geralmente verde, mais claro entre o ventre e o rabo.',
    image: 'https://ufmg.br/thumbor/2ctDMPV7m_Q0kFCRNWlq0514FUM=/0x0:5208x3482/712x474/https://ufmg.br/storage/8/b/3/f/8b3f6b9ada3276d204a7721ddffb5489_15441281629578_2103214532.jpg',
    price: 40.29,
  },
  {
    name: 'Jabuti',
    description: 'Os jabutis são répteis pertencentes à Ordem Testudines, da família Testudinidae (como as tartarugas e os cágados) e do gênero Chelonoidis. Na América do Sul',
    image: 'https://i0.statig.com.br/bancodeimagens/85/r5/ym/85r5ymbjm9ma5zjqkiozqqi52.jpg',
    price: 60.59,
  },
  {
    name: 'Coelho',
    description: ' são animais mamíferos pertencentes à ordem Lagomorpha',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgb-ZsMoD00N1kvQpuWqe5ydepKY4B3s6TEpwNPAVmHN5UEohomz3&usqp=CAE&s',
    price: 40.69,
>>>>>>> 038756978c10f8030aa1a3dde8cf0619a26cd669
  },
];

export const product = async (prisma: PrismaClient) => {
  for (const obj of Object.values(products)) {
    await prisma.product.upsert({
      where: { name: obj.name },
      update: {},
      create: {
        ...obj,
      },
    });
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 038756978c10f8030aa1a3dde8cf0619a26cd669
