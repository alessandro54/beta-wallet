import type {NextApiRequest, NextApiResponse} from "next";
import {getSession} from "next-auth/client";
import {patchUser} from "../../api/server/profile";

//GET /api/profile          Return current session
//PATCH /api/profile        Optional fields in body: firstName, lastName #Required on client-side
//DELETE /api/profile       *Required* fields in body: confirmationString

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({req})
  const {body, method} = req
  if (session)
    switch (method) {
      case "GET":
        res.status(200).json(session.user);
        break;
      case "PATCH":
        await patchUser(session, {...body})
          .then(response => res.status(200).json({response: "Updated Successfully", updatedUser: response}))
          .catch(error => res.status(500).json({error: error, message: "There was an error"}));
        break;
      case "DELETE":
        res.status(200).json({hi: "hello"});
        break;
      default:
        res.status(500).json({response: "Method not permitted"})
    }
  else
    res.status(401).json({response: "It is very likely that you do not have a session"})
}