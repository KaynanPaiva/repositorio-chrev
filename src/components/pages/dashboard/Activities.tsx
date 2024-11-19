"use client";

import {
  IconArrowDownRight,
  IconArrowUpLeft,
  IconBtc,
  IconEth,
  IconRpp,
  IconLtc,
} from "../../icons/Icones";

export default function RTActivities() {
  return (
    <section className="flex flex-1 flex-col gap-5 bg-white py-6">
      <div className="flex justify-between px-6">
        <div>
          <h2 className="text-xl font-semibold">Recent Trading Activities</h2>
          <span className="text-xs text-[#969BA0]">
            Lorem, ipsum dolor sit amet consectetur
          </span>
        </div>
        <div className="bg-[#F4F5F9]">
          <button className="bg-[#F4F5F9] text-[#969BA0] hover:text-white hover:bg-[#6418C3] p-4 transition-colors">
            Monthly
          </button>
          <button className="bg-[#F4F5F9] text-[#969BA0] hover:text-white hover:bg-[#6418C3] p-4 transition-colors">
            Weekly
          </button>
          <button className="bg-[#6418C3] text-white hover:text-white p-4">
            Today
          </button>
        </div>
      </div>
      <div className="flex flex-col pt-6 pb-14">
        <div className="flex items-center border-y border-[#F5F5F5] px-6 py-3 hover:shadow-[0px_2px_40px_#6518c32b,0px_-2px_40px_#6518c32b] transition-shadow">
          <div className="flex items-center gap-5 w-2/5">
            <span className="bg-[#2BC1551A] p-4">
              <IconArrowDownRight size={28} color="#2BC155" />
            </span>
            <div className="flex items-center gap-1">
              <IconBtc size={28} color="#FFAB2D" />
              <span className="text-lg font-semibold">Bitcoin</span>
            </div>
          </div>
          <span className="w-1/5">06:24:45 AM</span>
          <div className="flex justify-between w-2/5">
            <span className="text-center font-semibold w-1/2">+$5,553</span>
            <span className="text-end text-[#2BC155] w-1/2">Completed</span>
          </div>
        </div>
        <div className="flex items-center border-b border-[#F5F5F5] px-6 py-3 hover:shadow-[0px_2px_40px_#6518c32b,0px_-2px_40px_#6518c32b] transition-shadow">
          <div className="flex items-center gap-5 w-2/5">
            <span className="bg-[#FF2E2E1A] p-4">
              <IconArrowUpLeft size={28} color="#FF2E2E" />
            </span>
            <div className="flex items-center gap-1">
              <IconEth size={28} color="#DC3CCC" />
              <span className="text-lg font-semibold">Ethereum</span>
            </div>
          </div>
          <span className="w-1/5">06:24:45 AM</span>
          <div className="flex justify-between w-2/5">
            <span className="text-center font-semibold w-1/2">-$542</span>
            <span className="text-end text-[#8E8E8E] w-1/2">Pending</span>
          </div>
        </div>
        <div className="flex items-center border-b border-[#F5F5F5] px-6 py-3 hover:shadow-[0px_2px_40px_#6518c32b,0px_-2px_40px_#6518c32b] transition-shadow">
          <div className="flex items-center gap-5 w-2/5">
            <span className="bg-[#FF2E2E1A] p-4">
              <IconArrowUpLeft size={28} color="#FF2E2E" />
            </span>
            <div className="flex items-center gap-1">
              <IconRpp size={28} color="#2B98D6" />
              <span className="text-lg font-semibold">Ripple</span>
            </div>
          </div>
          <span className="w-1/5">06:24:45 AM</span>
          <div className="flex justify-between w-2/5">
            <span className="text-center font-semibold w-1/2">-$912</span>
            <span className="text-end text-[#FF2E2E] w-1/2">Canceled</span>
          </div>
        </div>
        <div className="flex items-center border-b border-[#F5F5F5] px-6 py-3 hover:shadow-[0px_2px_40px_#6518c32b,0px_-2px_40px_#6518c32b] transition-shadow">
          <div className="flex items-center gap-5 w-2/5">
            <span className="bg-[#2BC1551A] p-4">
              <IconArrowDownRight size={28} color="#2BC155" />
            </span>
            <div className="flex items-center gap-1">
              <IconLtc size={28} color="#5F5F5F" />
              <span className="text-lg font-semibold">Litecoin</span>
            </div>
          </div>
          <span className="w-1/5">06:24:45 AM</span>
          <div className="flex justify-between w-2/5">
            <span className="text-center font-semibold w-1/2">+$7,762</span>
            <span className="text-end text-[#2BC155] w-1/2">Completed</span>
          </div>
        </div>
        <div className="flex items-center border-b border-[#F5F5F5] px-6 py-3 hover:shadow-[0px_2px_40px_#6518c32b,0px_-2px_40px_#6518c32b] transition-shadow">
          <div className="flex items-center gap-5 w-2/5">
            <span className="bg-[#2BC1551A] p-4">
              <IconArrowDownRight size={28} color="#2BC155" />
            </span>
            <div className="flex items-center gap-1">
              <IconBtc size={28} color="#FFAB2D" />
              <span className="text-lg font-semibold">Bitcoin</span>
            </div>
          </div>
          <span className="w-1/5">06:24:45 AM</span>
          <div className="flex justify-between w-2/5">
            <span className="text-center font-semibold w-1/2">+$5,553</span>
            <span className="text-end text-[#2BC155] w-1/2">Completed</span>
          </div>
        </div>
        <div className="flex items-center border-b border-[#F5F5F5] px-6 py-3 hover:shadow-[0px_2px_40px_#6518c32b,0px_-2px_40px_#6518c32b] transition-shadow">
          <div className="flex items-center gap-5 w-2/5">
            <span className="bg-[#FF2E2E1A] p-4">
              <IconArrowUpLeft size={28} color="#FF2E2E" />
            </span>
            <div className="flex items-center gap-1">
              <IconRpp size={28} color="#2B98D6" />
              <span className="text-lg font-semibold">Ripple</span>
            </div>
          </div>
          <span className="w-1/5">06:24:45 AM</span>
          <div className="flex justify-between w-2/5">
            <span className="text-center font-semibold w-1/2">-$912</span>
            <span className="text-end text-[#FF2E2E] w-1/2">Canceled</span>
          </div>
        </div>
      </div>
    </section>
  );
}
