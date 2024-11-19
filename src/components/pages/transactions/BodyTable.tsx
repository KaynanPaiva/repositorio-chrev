"use client";
import { useEffect, useState } from "react";
import {
  IconArrowDownRight,
  IconArrowUpLeft,
  IconBtc,
  IconEth,
  IconRpp,
  IconLtc,
} from "../../icons/Icones";

export default function BodyTable() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await fetch("http://localhost:3001/transactions");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setTransactions(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchTransactions();
  }, []);

  const getCryptoIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "bitcoin":
        return <IconBtc color="#FFAB2D" size={24} />;
      case "ethereum":
        return <IconEth color="#DC3CCC" size={24} />;
      case "ripple":
        return <IconRpp color="#2B98D6" size={24} />;
      case "litecoin":
        return <IconLtc color="#5F5F5F" size={24} />;
      default:
        return null;
    }
  };

  const getTransactionStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "#2BC155"; 
      case "pending":
        return "#5E5E5E"; 
      case "canceled":
        return "#FF2E2E"; 
      default:
        return "#000000"; 
    }
  };

  return (
    <section className="w-full bg-white px-6">
      <div className="flex w-full flex-col">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <div className="flex w-full border-b py-4" key={transaction.transactionId}>
              {/* Seta */}
              <div className="flex w-1/12">
                <span className={`p-4 ${transaction.amount.includes("-") ? 'bg-[#FF2E2E1A]' : 'bg-[#2BC1551A]'}`}>
                  {transaction.amount.includes("-") ? (
                    <IconArrowUpLeft size={28} color="#FF2E2E" />
                  ) : (
                    <IconArrowDownRight size={28} color="#2BC155" />
                  )}
                </span>
              </div>
              
              {/* Transaction ID */}
              <div className="flex items-center justify-start w-2/12">
                <span>{transaction.transactionId}</span>
              </div>

              {/* Date */}
              <div className="flex items-center justify-start w-2/12">
                <span>{transaction.date}</span>
              </div>

              {/* From */}
              <div className="flex items-center justify-start w-1/12">
                <span>{transaction.from}</span>
              </div>

              {/* To */}
              <div className="flex items-center justify-start gap-2 w-1/12">
                <span className="w-6 h-6 rounded-full bg-[#C4C4C4]"></span>
                <span>{transaction.to}</span>
              </div>

              {/* Coin */}
              <div className="flex items-center justify-start gap-2 w-1/12">
                {getCryptoIcon(transaction.coin)}
                <span>{transaction.coin.charAt(0).toUpperCase() + transaction.coin.slice(1)}</span>
              </div>

              {/* Amount */}
              <div className="flex items-center justify-start w-1/12">
                <span>{transaction.amount}</span>
              </div>

              {/* Note */}
              <div className="flex items-center justify-start w-2/12">
                <span>{transaction.note}</span>
              </div>

              {/* Status */}
              <div className="flex items-center justify-end w-1/12">
                <span className="font-semibold" style={{ color: getTransactionStatusColor(transaction.status) }}>
                  {transaction.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div>Carregando...</div>
        )}
      </div>
    </section>
  );
}
