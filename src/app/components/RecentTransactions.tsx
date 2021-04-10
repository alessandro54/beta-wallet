import React from "react";
import {Transaction} from "../../types/types";

const RecentTransactions: React.FC<{transactions:Array<Transaction>}> = ({transactions}) => {
  if (transactions.length != 0)
    return (
      <div className="h-3/5">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="bg-white w-11/12 h-5/6 rounded-xl shadow-2xl">
            <h1>Recent Transactions</h1>
            <div>
              {
                transactions.map((transaction,i) => (
                  <div key={i} className="flex justify-between">
                    <p>{transaction.description}</p>
                    <p>{transaction.amount}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  else
    return (
      <h1>Parece que no hay transacciones</h1>
    )
}


export default RecentTransactions