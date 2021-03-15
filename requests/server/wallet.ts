import prisma from "../../lib/prisma";

const adminAllWallets = async () => {
  return await prisma.wallet.findMany()
}
const getAllWallets = async (session) => {
  const {id} = session.user
  return await prisma.wallet.findMany({
    where: {
      ownerId: id
    },
    include: {
      transactions: {
        select:{
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
const createWallet = async (session, body) => {
  const { id } = session
  return await prisma.wallet.create({
    data: {

    }
  })
}

export { getAllWallets, adminAllWallets }