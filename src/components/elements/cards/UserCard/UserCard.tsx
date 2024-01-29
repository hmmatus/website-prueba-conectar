import { UserI } from "@/model/auth/user.model"
import Image from "next/image";
import { useRouter } from "next/router";
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
    <div className="w-100 h-100 flex flex-col">
      <Image className="" src={item.image} alt="User" width={500} height={500}/>
      <div className="flex justify-around">
        <h2 className="text-xl font-bold">{` ${item.name} ${item.lastName}`}</h2>
      </div>
      <h2 className="text-xl font-bold hover:cursor-pointer" onClick={onPressEvent}>See more</h2>
    </div>
  )
}

export default UserCard;