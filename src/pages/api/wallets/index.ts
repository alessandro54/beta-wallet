import type {NextApiRequest, NextApiResponse} from "next";
import {getSession} from "next-auth/client";
import {getWallets} from "../../../api/server/wallet";

//GET /api/wallets           Return all wallets of the user
//POST /api/wallets

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({req})
  const {body, method} = req
  if (session)
    switch (method) {
      case "GET":
        await getWallets(session)
          .then(response => res.status(200).json(response))
          .catch(error => res.status(500).json({error:error, message:"There was an error"}));break;
      case "POST":
        //TODO Create Wallet
        break;
      default:
        res.status(500).json({response: "Method not permitted"})
    }
  else
    res.status(401).json({response:"It is very likely that you do not have a session"})
}