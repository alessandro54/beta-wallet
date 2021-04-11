import React from "react";
import {Wallet as WalletType} from "../types/types";

interface WalletProps {
  wallet:WalletType;
  handleClick: (wallet: WalletType) => void;
}
const Wallet: React.FC<WalletProps> = ({wallet, handleClick}) => {
  return (
    <div className="w-11/12 h-full bg-white rounded-xl flex justify-center items-center z-4" onClick={() => handleClick(wallet)}>
      <h1>{wallet.name}</h1>
    </div>
  )
}

export default Wallet