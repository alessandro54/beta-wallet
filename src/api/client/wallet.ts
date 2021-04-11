import {Wallet} from "../../types/types";

const fetchWallets = async () => {
  try {
    return (await fetch('/api/wallet')).json()
  } catch (error) {
    console.log(error)
  }
}

const createWallet = async (newWallet: Wallet) => {
  try {
    return await fetch('/api/wallet',{
      method: "POST",
      body: JSON.stringify(newWallet)
    })
  } catch (error) {
    console.log(error)
  }
}

export { fetchWallets}