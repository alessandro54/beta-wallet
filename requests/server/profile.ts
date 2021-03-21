import prisma from "../../lib/prisma";
const getUser = async (session) => {
  const {id} = session.user
  return await prisma.user.findUnique({
    where: {
      id:id
    }
  })
}

const patchUser = async (session, body) => {
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
const deleteUser = async (session, body) => {

}

export {getUser, patchUser, deleteUser}