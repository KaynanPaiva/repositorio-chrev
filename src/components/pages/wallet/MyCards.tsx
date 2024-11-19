import { IconChevronLeft } from "@/components/icons/Icones";
import cardBg from "@/images/card2Bg.png";
import cardIcon1 from "@/images/cardIcon1.png";
import cardIcon2 from "@/images/cardIcon2.png";
import Image from "next/image";

export default function MyCards() {
  return (
    <section className="flex flex-col gap-14 bg-white py-6">
      <div className="flex flex-col gap-14 px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">My Cards</h2>
            <span className="text-xs text-[#969BA0]">
              Lorem ipsum dolor sit amet, consectetur
            </span>
          </div>
          <div className="w-1/2">
            <button className="text-[#AAAAAA] bg-[#F1F1F1] w-1/2 py-6 hover:bg-[#6418C3] hover:text-white">
              Crypto Wallet
            </button>
            <button className="text-white bg-[#6418C3] w-1/2 py-6">
              Bank Wallet
            </button>
          </div>
        </div>
        <div
          className="flex items-center justify-center relative w-full h-[420px] bg-cover bg-center text-white pb-6"
          style={{ backgroundImage: `url(${cardBg.src})` }}
        >
          <div className="flex flex-col gap-12 w-2/3">
            <div className="flex items-center justify-between">
              <Image alt="cardIcon1" src={cardIcon1} width={72}></Image>
              <span className="text-lg">**** **** **** 1234</span>
            </div>
            <div className="flex flex-col items-start justify-between">
              <span>Main Balance</span>
              <span className="text-4xl font-semibold">$673,412.66</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[#FFFFFF99] text-sm">VALID THRU</span>
                <span>08/21</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#FFFFFF99] text-sm">CARD HOLDER</span>
                <span>Thomas Aldox</span>
              </div>
              <div>
                <Image alt="cardIcon1" src={cardIcon2} width={84}></Image>
              </div>
            </div>
            <button className="flex items-center gap-4 py-2 px-4 font-medium absolute top-1/2 -left-4 -rotate-90 hover:bg-[#3d1e6371] transition-colors">
              <span>Prev Card</span>
              <IconChevronLeft width={8} color="white" className="rotate-90" />
            </button>
            <button className="flex items-center gap-4 py-2 px-4 font-medium absolute top-1/2 -right-4 -rotate-90 hover:bg-[#7a286671] transition-colors">
              <span>Next Card</span>
              <IconChevronLeft width={8} color="white" className="rotate-90" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <div className="flex justify-between w-full">
            <span>Montlhy Limits</span>
            <span className="font-semibold">$20,000 of $100,000</span>
          </div>
          <div className="flex w-full h-3">
            <span className="flex bg-[#DFDFDF] w-full">
              <span className="bg-[#6418C3] w-4/5"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="border-b border-[#EEEEEE] shadow-xl"></div>
      <div className="flex flex-col gap-6 px-10">
        <div className="flex w-full">
          <div className="flex flex-col w-1/2">
            <span className="text-[#0000007b]">Card Name</span>
            <span className="font-medium text-lg">Main Balance</span>
          </div>
          <div className="flex flex-col w-1/2">
            <span className="text-[#0000007b]">Bank Name</span>
            <span className="font-medium text-lg">ABC Center Bank</span>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-1/2">
            <span className="text-[#0000007b]">Valid Date</span>
            <span className="font-medium text-lg">08/21</span>
          </div>
          <div className="flex flex-col w-1/2">
            <span className="text-[#0000007b]">Card Holder</span>
            <span className="font-medium text-lg">Thomas Aldox</span>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-1/2">
            <span className="text-[#0000007b]">Card Number</span>
            <span className="font-medium text-lg">**** **** **** 1234</span>
          </div>
          <div className="flex  w-1/2 border border-[#6418C3] font-medium">
            <button className="w-3/5 text-[#6418C3] border-r border-[#6418C3] hover:bg-[#6418C3] hover:text-white transition-colors">
              <span>Generate Number</span>
            </button>
            <button className="w-2/5 text-[#6418C3] hover:bg-[#6418C3] hover:text-white transition-colors">
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
