import type {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../lib/prisma";
import {getSession} from "next-auth/client";

//PATCH /api/profile
//Optional fields in body: firstName, lastName
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({req})
  const {body, method} = req
  if (session)
    switch (method) {
      case "GET":
        res.status(200).json(session.user);
        break;
      case "PATCH":
        await patchUser(session, {...body})
          .then(response => res.status(200).json(response))
          .catch(error => res.status(500).json({error:error, message:"There was an error"}))
        break;
      case "DELETE":
        res.status(200).json({hi:"hello"});
        break;
      default:
        throw new Error("aaa")
    }
  else
    res.status(401).json({response:"It is very likely that you do not have a session"})
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

export default handle