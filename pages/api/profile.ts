import type {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../lib/prisma";
import {getSession} from "next-auth/client";

//PATCH /api/profile
//Optional fields in body: firstName, lastName
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({req})
  const {body, method} = req
  switch (method) {
    case "PATCH":
      try {
        const response = patchUser(session, body)
        console.log(response)
        res.status(200).json(response);
      } catch (e) {

      }

      break;
    case "DELETE":
      res.status(200).json({hi:"hello"});
      break;
    default:
      res.status(500).json({response: "Method not accepted"})
  }
}

const patchUser = async (session, body) => {
  const {id} = session?.user
  const updatedUser = JSON.parse(body)
  return await prisma.user.update({
    where: {
      id: id
    },
    data: {...updatedUser}
  })
}

export default handle