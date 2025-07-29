import Image from "next/image";

export default function FoodCard(props) {
  const foodFilterData = props.foodFilterData;

  console.log(foodFilterData);

  return (
    <div className="w-[160px] h-[80px] bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 text-[14px] flex justify-between">
      <span>{foodFilterData.name}</span>
      <Image
        src={`/api/code-challenge${foodFilterData.image_url}`}
        alt={`${foodFilterData.name} icon`}
        width={80}
        height={80}
      />
    </div>
  );
}
