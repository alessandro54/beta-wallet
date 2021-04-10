import prisma from "../../db/prisma";

const getRecentTransactions = async (session) => {
  const {id} = session.user
  return await prisma.transaction.findMany({
    where: {
      wallet: {
        ownerId : id
      }
    },
    take: 10,
    select: {
      id: true,
      description: true,
      amount: true,
      createdAt: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}

export { getRecentTransactions}
