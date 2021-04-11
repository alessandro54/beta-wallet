import prisma from "../../db/prisma";
import {Session} from "../../types/user";
import {Wallet} from "../../types/types";

const adminAllWallets = async () => {
  return await prisma.wallet.findMany()
}

const getWallets = async (session: Session) => {
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
const createWallet = async (session: Session, newWallet: Wallet) => {
  const { id } = session.user
  return await prisma.wallet.create({
    //@ts-ignore
    data: {
      ...newWallet
    }
  })
}

export { getWallets, adminAllWallets }