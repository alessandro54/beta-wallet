import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";
import {fetchWallets} from "../requests/client/wallet";
import WalletSwiper from "../components/WalletSwiper";
import {Wallet} from "../types";
import RecentTransactions from "../components/RecentTransactions";

const Dashboard = () => {
  const [session, loading] = useSession()
  const [wallets,setWallets] = useState<Array<Wallet>>([])
  const router = useRouter();
  useEffect(() => {
    fetchWallets().then(response => setWallets(response))
  },[])
  if (session && wallets.length != 0)
    return(
      <Layout>
        <section className="w-full h-full">
          <div className="h-1/5 flex justify-center items-center">
            <div className="w-4/5 bg-white py-7 rounded-xl">
              Metas
            </div>
          </div>
          <WalletSwiper wallets={wallets}/>
          <RecentTransactions/>
        </section>
      </Layout>
    )
  else {
    if (!session && !loading) router.push('/auth/email')
    return null
  }
}

export default Dashboard