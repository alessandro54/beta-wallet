import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";
import {fetchWallets} from "../requests/client/wallet";
import WalletSwiper from "../components/WalletSwiper";
import {Wallet} from "../types";

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
        <div className="w-full h-full">
          <section className="h-1/5 flex justify-center items-center">
            <div className="w-4/5 bg-white py-7 rounded-xl">
              Metas
            </div>
          </section>
          <WalletSwiper wallets={wallets}/>
          <section className="h-3/5">
            <div className="flex flex-col justify-center items-center h-full">
              <h1>Recent Transactions</h1>
              <div className="bg-white w-11/12 h-5/6 rounded-xl shadow-2xl">

              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  else {
    if (!session && !loading) router.push('/auth/email')
    return null
  }
}

export default Dashboard