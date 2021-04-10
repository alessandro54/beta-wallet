import React from "react";

const Wallet = ({wallet, handleClick}) => {
  return (
    <div className="w-11/12 h-full bg-white rounded-xl flex justify-center items-center z-4" onClick={() => handleClick(wallet)}>
      <h1>{wallet.name}</h1>
    </div>
  )
}

export default Wallet