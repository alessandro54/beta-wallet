import React, {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Wallet} from "../types";

const WalletSwiper: React.FC<{wallets:Array<Wallet>}> = ({wallets}) => {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false)
  const [currentWallet, setCurrentWallet] = useState<Wallet>({id:0,name:"",transactions:[]})
  const handleWalletClick = (wallet : Wallet) => {
    setModalVisibility(true)
    setCurrentWallet(wallet)
  }
  const handleModalExit = () => setModalVisibility(false)
  return (
    <>
      <Swiper className="h-1/5 w-full flex justify-center  items-center sm:hidden">
        {
          wallets.map((wallet, i) => (
              <SwiperSlide key = {i} className="flex justify-center items-center z-4">
                <div className="w-11/12 h-full bg-white rounded-xl flex justify-center items-center z-4" onClick={() => handleWalletClick(wallet)}>
                  <h1>{wallet.name}</h1>
                </div>
              </SwiperSlide>
            )
          )
        }
      </Swiper>
      <div className={`${modalVisibility ? "flex" : "hidden"} fixed justify-center items-center bottom-0 w-screen h-main z-20 bg-black bg-opacity-50`}
           onClick={() => handleModalExit()}
           style={{backdropFilter:"blur(10px)"}}>
        <div className="w-4/5 h-4/5 bg-white rounded-xl flex flex-col">
          <h1>{currentWallet.name}</h1>
          {
            currentWallet.transactions.length != 0 ? (
              currentWallet.transactions.map((transaction,i) => (
                <div key={i}>
                  <h1>{transaction.id}</h1>
                </div>
              ))
            ) : (
              <h1>Parece que no hay transacciones</h1>
            )
          }
        </div>
      </div>
    </>
  )
}

export default WalletSwiper