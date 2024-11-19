import { IconLtc, IconChevronDown } from "../../icons/Icones";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Transfer() {
    return (
        <section className="flex flex-1 flex-col gap-4 bg-white p-6">
          <div className="flex items-center justify-between py-2">
            <div>
              <h2 className="text-2xl font-semibold">Transfer</h2>
              <span className="text-xs text-[#969BA0]">
                Lorem ispsum dolor sit amet, consectetur
              </span>
            </div>
           
          </div>
          <div className="flex flex-col">
            <div className="flex border-2 border-[#EFEFEF]">
              <div className="flex items-center justify-center border-r-2 w-1/3 py-4">
                <span className="text-[#888888]">Amount BTC</span>
              </div>
              <div className="w-2/3 px-2 py-4">
                <input
                  className="bg-transparent border-none text-black outline-none appearence-none placeholder:text-sm"
                  type="number"
                  placeholder="0.000000"
                />
                <style>
                  {`
              input[type="number"]::-webkit-outer-spin-button,
              input[type="number"]::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
              
              /* Para Firefox */
              input[type="number"] {
                -moz-appearance: textfield;
              }
            `}
                </style>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center py-4 justify-between font-semibold">
              <h2 className="text-2xl">Recent Contacts</h2>
              <button className="text-[#6418C3]">View More</button>
            </div>
            <div className="">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="basis-1/5">
                    <div>
                      <div className="bg-[#C4C4C4] h-20 w-2/3"></div>
                      <div className="flex flex-col">
                        <span className="font-medium">Samuel</span>
                        <span className="text-sm font-light">@sam224</span>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-1/5">
                    <div>
                      <div className="bg-[#C4C4C4] h-20 w-2/3"></div>
                      <div className="flex flex-col">
                        <span className="font-medium ">Cindy</span>
                        <span className="text-sm font-light">@cindyss</span>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-1/5">
                    <div>
                      <div className="bg-[#C4C4C4] h-20 w-2/3"></div>
                      <div className="flex flex-col">
                        <span className="font-medium">David</span>
                        <span className="text-sm font-light">@davidxc</span>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-1/5">
                    <div>
                      <div className="bg-[#C4C4C4] h-20 w-2/3"></div>
                      <div className="flex flex-col">
                        <span className="font-medium">Martha</span>
                        <span className="text-sm font-light">@marthaa</span>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-1/5">
                    <div>
                      <div className="bg-[#C4C4C4] h-20 w-2/3"></div>
                      <div className="flex flex-col">
                        <span className="font-medium">Olivia</span>
                        <span className="text-sm font-light">@olivia62</span>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-1/5">
                    <div>
                      <div className="bg-[#C4C4C4] h-20 w-2/3"></div>
                      <div className="flex flex-col">
                        <span className="font-medium">Bella</span>
                        <span className="text-sm font-light">@bellazz</span>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          <div className="flex py-10">
            <div className="w-1/3">
              <span className="text-[13px] text-[#0C0C0CB2]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </span>
            </div>
            <div className="flex justify-end gap-6 pl-8 w-2/3 text-white text-lg font-semibold">
              <button className="flex items-center justify-center w-full gap-4 px-6 bg-[#6418C3]">
                <span>TRANSFER NOW</span>
              </button>
            </div>
          </div>
        </section>
      );
}