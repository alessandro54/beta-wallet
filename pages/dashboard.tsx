import React from "react";
import Layout from "../components/Layout";
import {getSession, useSession} from "next-auth/client";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import WalletSwiper from "../components/WalletSwiper";
import {Transaction, Wallet} from "../lib/types";
import RecentTransactions from "../components/RecentTransactions";
import {getWallets} from "../requests/server/wallet";
import {getRecentTransactions} from "../requests/server/transaction";

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const session = await getSession({req})
  const wallets = await getWallets(session)
  const recentTransactions = await getRecentTransactions(session)
  return {
    props : JSON.parse(JSON.stringify({
      wallets,
      recentTransactions
    }))
  }
};
const Dashboard : React.FC<{wallets:Array<Wallet>, recentTransactions:Array<Transaction>}> = ({wallets, recentTransactions}) => {
  const [session, loading] = useSession()
  const router = useRouter();
  if (session)
    return(
      <Layout>
        <section className="w-full h-full">
          <div className="h-1/5 flex justify-center items-center">
            <div className="w-4/5 bg-white py-7 rounded-xl">
              Metas
            </div>
          </div>
          <WalletSwiper wallets={wallets}/>
          <RecentTransactions transactions ={recentTransactions}/>
        </section>
      </Layout>
    )
  else {
    if (!session && !loading) router.push('/auth/email')
    return null
  }
}

export default Dashboard