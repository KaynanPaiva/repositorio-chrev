"use client";
import {
  IconChevronDown,
  IconChevronTriangleUp,
  IconGraficoCobra,
} from "@/components/icons/Icones";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = Array.from({ length: 18 }, (_, index) => ({
  month: (index + 1).toString(),
  desktop: Math.floor(Math.random() * 300)*1000,
  mobile: Math.floor(Math.random() * 300)*1000,
}));

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function OverviewBalance() {
  return (
    <section className="flex flex-col gap-6 p-6 bg-white">
      <div className="flex justify-between">
        <div className=" flex flex-col">
          <h2 className="text-2xl font-semibold">Overview Balance</h2>
          <span className="text-xs text-[#969BA0]">
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
        <div className="flex items-center justify-center p-4 gap-4 bg-[#F4F5F9]">
          <span>Weekly (2020)</span>
          <IconChevronDown width={14} height={8} color="#6418C3" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-semibold">$673,412.66</span>
          <span className="font-light">Last month $563,443</span>
        </div>
        <div className="flex items-center gap-4">
          <IconGraficoCobra />
          <div className="flex items-center gap-1">
            <span className="text-[#37D159] text-lg">7%</span>
            <IconChevronTriangleUp />
          </div>
        </div>
      </div>
      <div className="flex">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData} height={500}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
            />
         <YAxis
              domain={[0, 1000000]} 
              ticks={[200000, 400000, 600000, 800000, 1000000]} 
              tickFormatter={(value) => `${value / 1000}k`} 
              axisLine={false}
              tickLine={false}
            />
             
    <Bar dataKey="desktop" fill="#6418C3" radius={10} barSize={20} />
  </BarChart>
</ChartContainer>
      </div>
    </section>
  );
}
