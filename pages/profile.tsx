import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";
import Layout from "../components/Layout";

const Profile = () => {
  const [session, loading] = useSession();
  const [user,setUser] = useState({})
  const router = useRouter();
  //console.log(loading)
  if (session){
    console.log(session)
    return (
      <Layout>
        <div>
          <h1>My Profile</h1>
          <form>


          </form>
        </div>
      </Layout>
    )
  }
  if (!session && !loading) router.push('/auth/magic')
  return null
}

export default Profile