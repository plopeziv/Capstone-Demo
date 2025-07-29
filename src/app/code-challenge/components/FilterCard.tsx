export default function FilterCard() {
  return (
    <div className="min-w-[239px] bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 p-[26px] text-[24px]">
      <span>Filter</span>
      <div className="text-[12px] my-5">
        <div className="h-[80px]">
          <span className="opacity-40">Food Category</span>
        </div>
        <div className="h-[80px]">
          <span className="opacity-40">Delivery Time</span>
        </div>
        <div>
          <span className="opacity-40">Price Range</span>
        </div>
      </div>
    </div>
  );
}
