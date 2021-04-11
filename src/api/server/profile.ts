import prisma from "../../db/prisma";
import {Session, UserParams} from "../../types/user";

const getUser = async (session: Session) => {
  const {id} = session.user
  return await prisma.user.findUnique({
    where: {
      id:id
    }
  })
}

const patchUser = async (session: Session, body: UserParams) => {
  const {id} = session.user
  body.updatedAt = new Date().toISOString()//Add updated timestamp
  return await prisma.user.update({
    where: {
      id: id
    },
    data: {...body}
  })
}
//TODO
const deleteUser = async (session: Session, body: UserParams) => {

}

export {getUser, patchUser, deleteUser}