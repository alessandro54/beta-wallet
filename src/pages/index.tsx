import React, {useContext} from "react";
import Layout from "../components/Layout";
import {AlertContext} from "../context/AlertProvider";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";

const Index = () => {
  const [state, dispatch] = useContext(AlertContext)
  const [session, loading] = useSession();
  if (!session) //Landing page
    return (
      <Layout>
        <h1>Save your money</h1>
      </Layout>
    )
  else {
    const router = useRouter();
    router.push('dashboard')
    return null
  }
};

export default Index;
