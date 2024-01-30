import { UserI } from "@/model/auth/user.model"
import { Colors } from "@/styles/color";
import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  item: UserI;
  onClick(): void;
}
const UserCard = ({item, onClick}: Props) => {
  const onPressEvent: MouseEventHandler<HTMLHeadingElement> = (event) => {
    onClick();
  }
  return (
    <div className="w-100 shadow-md rounded-lg p-4 flex flex-col border">
      <Image className="" src={item.image} alt="User" width={500} height={500}/>
      <div className="flex justify-around">
        <h2 className="text-2xl font-bold my-4">{` ${item.name} ${item.lastName}`}</h2>
      </div>
      <p className="text-blue text-xl text-end hover:cursor-pointer" style={{color: Colors.link}} onClick={onPressEvent}>See more</p>
    </div>
  )
}

export default UserCard;