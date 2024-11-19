import { IconDots } from "../../icons/Icones";
import Image from "next/image";
import cardBg from "@/images/cardBg.png";
import cardIcon1 from "@/images/cardIcon1.png";
import cardIcon2 from "@/images/cardIcon2.png";

export default function Cards() {
  return (
    <div className="flex flex-1 flex-col gap-4 bg-white p-6">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Cards</h2>
          <span className="text-xs text-[#969BA0]">
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
        <button className="flex items-center gap-4 bg-[#F4F5F9] px-4">
          <span>Settings</span>
          <IconDots />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex items-center justify-center w-11/12 h-[480px] bg-cover bg-center text-white pb-6"
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
          </div>
        </div>
        <div className="flex px-24 w-full">
          <div className="flex gap-4 w-2/3">
            <span className="rounded-full p-3 border border-[#E1E5FF] text-[#3B4CB8]">
              71%
            </span>
            <div className="flex flex-col">
              <span className="text-xs">Monthly Limits</span>
              <span className="text-2xl font-semibold">$20,000 of 100,000</span>
            </div>
          </div>
          <button className="flex items-center justify-end w-1/3">
            <span className="text-[#6418C3] font-semibold">View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
