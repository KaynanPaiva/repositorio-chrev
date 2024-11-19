import {
  IconChevronTriangleUp,
  IconChevronTriangleDown,
} from "@/components/icons/Icones";
export default function Table() {
  return (
    <section className="flex w-full bg-white px-6 py-4">
      <div className="flex items-center w-1/12">
        <input type="checkbox" className="h-5 w-10 border-black" />
      </div>
      <div className="flex items-center justify-start gap-3 w-2/12">
        <span>Transaction ID</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              size={10}
              className="text-[#D3D6E4] group-hover:text-black"
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              size={10}
              className="text-[#D3D6E4] group-hover:text-black"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 w-2/12">
        <span>Date</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
        <span className="px-10"></span>
      </div>
      <div className="flex items-center justify-start gap-3 w-1/12">
        <span>From</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 w-1/12">
        <span>To</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 w-1/12">
        <span>Coin</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 w-1/12">
        <span>Amount</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 w-2/12">
        <span>Note</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 w-1/12">
        <span>Status</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
