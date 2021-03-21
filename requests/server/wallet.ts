import prisma from "../../lib/prisma";

const adminAllWallets = async () => {
  return await prisma.wallet.findMany()
}

const getWallets = async (session) => {
  const {id} = session.user
  return await prisma.wallet.findMany({
    where: {
      ownerId: id
    },
    select:{
      id: true,
      name: true,
      transactions: {
        select: {
          id: true,
          description: true,
          amount: true,
          createdAt: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  });
}
const createWallet = async (session, newWallet) => {
  const { id } = session
  return await prisma.wallet.create({
    data: {
      ...newWallet
    }
  })
}

export { getWallets, adminAllWallets }