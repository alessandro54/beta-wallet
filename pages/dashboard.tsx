import React from "react";
import Layout from "../components/Layout";

const Dashboard = () => {
  return(
    <Layout>
      <div className="w-full h-full">
        <section className="h-1/5 flex justify-center items-center">
          <div className="w-4/5 bg-white py-7 rounded-xl">
            Metas
          </div>
        </section>
        <section className="h-4/5">
          <div className="flex flex-col justify-center items-center h-full">
            <h1>Recent Transactions</h1>
            <div className="bg-white w-11/12 h-5/6 rounded-xl">

            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Dashboard