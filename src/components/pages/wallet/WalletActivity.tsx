import { IconArrowDown, IconArrowUp } from "@/components/icons/Icones";

export default function WalletActivity() {
  return (
    <section className="bg-white">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between w-full p-6">
          <div className="">
            <h2 className="text-xl font-semibold">Wallet Activity</h2>
            <span className="text-xs text-[#969BA0]">
              Lorem ipsum dolor sit amet consectetur
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
        <div className="flex flex-col w-full pb-6">
          <div className="flex justify-between items-center px-10 py-2 border-b border-[#F5F5F5]">
            <div className="flex gap-2 w-2/4 font-semibold">
              <span className="bg-[#6418C31A] p-4  rounded-[2px]">
                <IconArrowUp color="#6418C3" size={27} />
              </span>
              <div className="flex flex-col justify-between py-1">
                <span className="text-sm text-black">Topup</span>
                <span className="text-xs text-[#0000007b]">
                  4/5/2020 06:24 AM
                </span>
              </div>
            </div>
            <span className="font-medium text-sm text-centerw-1/4">
              +$5,553
            </span>
            <span className="text-[#2BC155] font-medium text-sm text-center w-1/4">
              COMPLETED
            </span>
          </div>
          <div className="flex justify-between items-center px-10 py-2 border-b border-[#F5F5F5]">
            <div className="flex gap-2 w-2/4 font-semibold">
              <span className="bg-[#6418C31A] p-4 rounded-[2px]">
                <IconArrowUp color="#6418C3" size={27} />
              </span>
              <div className="flex flex-col justify-between py-1">
                <span className="text-sm text-black">Topup</span>
                <span className="text-xs text-[#0000007b]">
                  4/5/2020 06:24 AM
                </span>
              </div>
            </div>
            <span className="font-medium text-sm text-center w-1/4">
              +$5,553
            </span>
            <span className="text-[#616161] font-medium text-sm text-center w-1/4">
              PENDING
            </span>
          </div>
          <div className="flex justify-between items-center px-10 py-2 border-b border-[#F5F5F5]">
            <div className="flex gap-2 w-2/4 font-semibold">
              <span className="bg-[#6418C31A] p-4  rounded-[2px]">
                <IconArrowDown color="#6418C3" size={27} />
              </span>
              <div className="flex flex-col justify-between py-1">
                <span className="text-sm text-black">Withdraw</span>
                <span className="text-xs text-[#0000007b]">
                  4/5/2020 06:24 AM
                </span>
              </div>
            </div>
            <span className="font-medium text-sm text-center w-1/4">
              -$2,000
            </span>
            <span className="text-[#FF4F4F] font-medium text-sm text-center w-1/4">
              COMPLETED
            </span>
          </div>
          <div className="flex justify-between items-center px-10 py-2 border-b border-[#F5F5F5]">
            <div className="flex gap-2 w-2/4 font-semibold">
              <span className="bg-[#6418C31A] p-4 rounded-[2px]">
                <IconArrowDown color="#6418C3" size={27} />
              </span>
              <div className="flex flex-col justify-between py-1">
                <span className="text-sm text-black">Withdraw</span>
                <span className="text-xs text-[#0000007b]">
                  4/5/2020 06:24 AM
                </span>
              </div>
            </div>
            <span className="font-medium text-sm text-center w-1/4">
              -$2,000
            </span>
            <span className="text-[#616161] font-medium text-sm text-center w-1/4">
              PENDING
            </span>
          </div>
          <div className="flex justify-between items-center px-10 py-2 border-b border-[#F5F5F5]">
            <div className="flex gap-2 w-2/4 font-semibold">
              <span className="bg-[#6418C31A] p-4  rounded-[2px]">
                <IconArrowUp color="#6418C3" size={27} />
              </span>
              <div className="flex flex-col justify-between py-1">
                <span className="text-sm text-black">Topup</span>
                <span className="text-xs text-[#0000007b]">
                  4/5/2020 06:24 AM
                </span>
              </div>
            </div>
            <span className="font-medium text-sm text-center w-1/4">
              +$2,000
            </span>
            <span className="text-[#616161] font-medium text-sm text-center w-1/4">
              PENDING
            </span>
          </div>
          <div className="flex justify-between items-center px-10 py-2 border-b border-[#F5F5F5]">
            <div className="flex gap-2 w-2/4 font-semibold">
              <span className="bg-[#6418C31A] p-4  rounded-[2px]">
                <IconArrowDown color="#6418C3" size={27} />
              </span>
              <div className="flex flex-col justify-between py-1">
                <span className="text-sm text-black">Withdraw</span>
                <span className="text-xs text-[#0000007b]">
                  4/5/2020 06:24 AM
                </span>
              </div>
            </div>
            <span className="font-medium text-sm text-center w-1/4">
              -$2,000
            </span>
            <span className="text-[#FF2E2E] font-medium text-sm text-center w-1/4">
              CANCELED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
