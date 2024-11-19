"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import bitcoin from "@/images/coinBitcoin.svg";
import ethereum from "@/images/coinEthereum.svg";
import ripple from "@/images/coinRipple.svg";
import litecoin from "@/images/coinLitecoin.svg";
import { IconGraficoPositivo } from "../../icons/Icones";

export default function CryptosGraph2() {
  const [cryptos, setCryptos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCryptos() {
      try {
        const response = await fetch("http://localhost:3001/cryptoAmount");

        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setCryptos(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchCryptos();
  }, []);

  const getCryptoImage = (name: string) => {
    switch (name.toLowerCase()) {
      case "bitcoin":
        return bitcoin;
      case "ethereum":
        return ethereum;
      case "ripple":
        return ripple;
      case "litecoin":
        return litecoin;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-6 w-full">
      {cryptos.length > 0 ? (
        cryptos.map((crypto) => (
          <div
            key={crypto.id}
            className="flex items-center bg-white justify-between w-1/4 px-4 py-4"
          >
            <div className="flex flex-col gap-[2px]">
              <span className="text-2xl font-semibold">${crypto.price}</span>
              <span className="flex gap-2 text-xs">
                <IconGraficoPositivo width={30} height={20} color=""/>
                {crypto.percentage} ({`${crypto.days} days`})
              </span>
            </div>
            <span>
              <Image
                alt={`${crypto.coin} Image`}
                width={60}
                height={60}
                src={getCryptoImage(crypto.coin)}
              />
            </span>
          </div>
        ))
      ) : (
        <div className="flex gap-6 w-full">
          <div className="w-1/4 bg-white h-[92px] flex items-center justify-between px-4">
            <div className="w-1/2 flex flex-col gap-1">
              <div className="bg-zinc-500 w-1/4 h-8"></div>
              <span className="bg-zinc-300 w-2/4 h-4"></span>
            </div>
            <div className="bg-zinc-500 h-14 w-14"></div>
          </div>
          <div className="w-1/4 bg-white h-[92px] flex items-center justify-between px-4">
            <div className="w-1/2 flex flex-col gap-1">
              <div className="bg-zinc-500 w-1/4 h-8"></div>
              <span className="bg-zinc-300 w-2/4 h-4"></span>
            </div>
            <div className="bg-zinc-500 h-14 w-14"></div>
          </div>
          <div className="w-1/4 bg-white h-[92px] flex items-center justify-between px-4">
            <div className="w-1/2 flex flex-col gap-1">
              <div className="bg-zinc-500 w-1/4 h-8"></div>
              <span className="bg-zinc-300 w-2/4 h-4"></span>
            </div>
            <div className="bg-zinc-500 h-14 w-14"></div>
          </div>
          <div className="w-1/4 bg-white h-[92px] flex items-center justify-between px-4">
            <div className="w-1/2 flex flex-col gap-1">
              <div className="bg-zinc-500 w-1/4 h-8"></div>
              <span className="bg-zinc-300 w-2/4 h-4"></span>
            </div>
            <div className="bg-zinc-500 h-14 w-14"></div>
          </div>
        </div>
      )}
    </div>
  );
}
