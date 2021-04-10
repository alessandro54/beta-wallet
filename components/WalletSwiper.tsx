import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Wallet as WalletType} from "../lib/types";
import Wallet from "./Wallet.tsx"
import Modal from "./Modal";

const WalletSwiper: React.FC<{wallets:Array<WalletType>}> = ({wallets}) => {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false)
  const [currentWallet, setCurrentWallet] = useState<WalletType>({id:0,name:"",transactions:[]})
  const handleWalletClick = (wallet : WalletType) => {
    setModalVisibility(true)
    setCurrentWallet(wallet)
  }
  const handleModalExit = () => setModalVisibility(false)
  return (
    <>
      <Swiper className="h-1/5 h- w-full flex justify-center  items-center sm:hidden ">
        {
          wallets.map((wallet, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center z-4">
              <Wallet wallet={wallet} handleClick={handleWalletClick}/>
            </SwiperSlide>
            )
          )
        }
      </Swiper>
      <Modal handleExit = {handleModalExit} visibility={modalVisibility}>
        <div className="w-4/5 h-4/5 bg-white rounded-xl flex flex-col z-25"
             onClick={(e) => {e.stopPropagation()}}>
          <h1>{currentWallet.name}</h1>
          {
            currentWallet.transactions.length != 0 ? (
              currentWallet.transactions.map((transaction,i) => (
                <div key={i}>
                  <h1>{transaction.id}</h1>
                </div>
              ))
            ) : (
              <h1>Parece que no hay transacciones aqui</h1>
            )
          }
        </div>
      </Modal>
    </>
  )
}

export default WalletSwiper