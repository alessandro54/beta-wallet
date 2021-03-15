import prisma from "../../lib/prisma";

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

export {patchUser, deleteUser}