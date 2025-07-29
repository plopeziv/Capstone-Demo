import { useState, useEffect } from "react";
import Image from "next/image";
import { ScaleLoader } from "react-spinners";

export default function RestaurantCard(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const restaurantData = props.restaurantData;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchResponse = await fetch(
          `api/code-challenge/open/${restaurantData.id}`
        );

        const jsonData = await fetchResponse.json();

        if (jsonData.is_open) {
          setIsOpen(jsonData.is_open);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className="w-[327px] h-[202px] bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 p-4 flex justify-center items-center">
        <ScaleLoader width={8} color="#808080" />
      </div>
    );
  }

  return (
    <div className="w-[327px] h-[202px] bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 p-4 flex flex-col justify-between overflow-hidden relative">
      <Image
        src={`/api/code-challenge${restaurantData.image_url}`}
        alt={`${restaurantData.name} icon`}
        width={140}
        height={140}
        className={`object-contain absolute -top-9 -right-7 ${
          !isOpen ? "opacity-50" : ""
        }`}
      />
      <div className="text-[12px] flex gap-2">
        <div className="inline-block border-[0.6px] border-[#0000001A] border-solid py-2 px-3 rounded-full shadow-xl shadow-black/5 flex items-center gap-1">
          <div
            className={`w-2 h-2 rounded-full ${
              isOpen ? "bg-[#00703A]" : "bg-black"
            }`}
          ></div>
          {isOpen ? "Open" : "Closed"}
        </div>

        {isOpen && (
          <div className="inline-block border-[0.6px] border-[#0000001A] border-solid py-2 px-3 rounded-full shadow-xl shadow-black/5">
            {restaurantData.delivery_time_minutes} min
          </div>
        )}
      </div>

      {!isOpen && (
        <div className="text-[12px] flex justify-center items-center ">
          <div className="h-[28px] border-[0.6px] border-[#0000001A] bg-[#FAFAFA] border-solid py-1 px-3 rounded-sm shadow-xl shadow-black/5">
            Opens tomorrow at 12 PM
          </div>
        </div>
      )}

      <div
        className={`flex items-center justify-between text-[20px] ${
          !isOpen ? "opacity-50" : ""
        }`}
      >
        {restaurantData.name}
        <div className="w-8 h-8 rounded-full bg-[#00703A] flex items-center justify-center font-bold text-white text-[12px]">
          →
        </div>
      </div>
    </div>
  );
}
