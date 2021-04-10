import React from "react";
import Link from "next/link";
import {RiHomeLine, RiLineChartLine} from "react-icons/ri";
import {CgProfile, CgMathPlus} from "react-icons/cg"
import {IoWalletOutline} from "react-icons/io5"
const LowerBar = () => {
  return (
    <section className="w-full h-nav md:hidden">
      <div className="w-full h-full flex justify-around items-center text-2xl">
        <Link href="/">
          <span><RiHomeLine/></span>
        </Link>
        <Link href="/wallets">
          <span><IoWalletOutline/></span>
        </Link>
        <button>
          <span><CgMathPlus/></span>
        </button>
        <Link href="/statistics">
          <span><RiLineChartLine/></span>
        </Link>
        <Link href="/profile">
          <span><CgProfile/></span>
        </Link>
      </div>
    </section>
  )
}
export default LowerBar