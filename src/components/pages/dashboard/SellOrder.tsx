"use client";
import {
  IconDots,
  IconEth,
  IconChevronDown,
  IconChevronTriangleRight,
} from "../../icons/Icones";
import { useEffect, useState } from "react";

export default function SellOrder() {
  const [buy, setBuy] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBuy() {
      try {
        const response = await fetch("http://localhost:3001/sellOrder");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setBuy(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }
    fetchBuy();
  }, []);

  return (
    <section className="bg-white gap-6 flex flex-1 flex-col py-6">
      <div className="flex items-center justify-between px-6">
        <h2 className="text-xl font-semibold">Sell Order</h2>
        <IconDots />
      </div>
      <button className="flex items-center px-6 py-3 justify-between hover:bg-[#FBFBFB]">
        <div className="flex items-center gap-2">
          <IconEth color="#DC3CCC" size={50} />
          <span className="font-semibold text-lg">Ethereum</span>
        </div>
        <div>
          <IconChevronDown width={16} color="#868686" />
        </div>
      </button>
      <div>
        <div className="flex text-[#6C6C6C]">
          <span className="w-1/3 text-center">Price</span>
          <span className="w-1/3 text-center">Amount</span>
          <span className="w-1/3 text-center">Total</span>
        </div>
        <div className="py-2">
          {buy.map((item, index) => (
            <div
              key="1"
              className="flex font-medium py-4 hover:bg-[#DC3CCC] hover:text-white transition-colors"
            >
              <span className="w-1/3 text-center">{item.price}</span>
              <span className="w-1/3 text-center">{item.amount}</span>
              <span className="w-1/3 text-center">{item.total}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full px-6">
          <button className="flex flex-1 items-center justify-center gap-2 px-4 py-2 hover:bg-[#2b97d625] transition-colors">
            <span className="text-[#6418C3] font-semibold">Show more</span>
            <IconChevronTriangleRight size={12} color="#C4C5CD" />
          </button>
        </div>
      </div>
    </section>
  );
}
