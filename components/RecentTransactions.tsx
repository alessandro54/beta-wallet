import React from "react";

const RecentTransactions: React<Array<any>> = (props) => {
  console.log(props)
  return (
    <div className="h-3/5">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="bg-white w-11/12 h-5/6 rounded-xl shadow-2xl">
          <h1>Recent Transactions</h1>
        </div>
      </div>
    </div>
  )
}

export default RecentTransactions