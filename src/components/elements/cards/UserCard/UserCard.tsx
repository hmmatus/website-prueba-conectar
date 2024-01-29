import { UserI } from "@/model/auth/user.model"
import Image from "next/image";

type Props = {
  item: UserI;
}
const UserCard = ({item}: Props) => {
  return (
    <div className="w-100 h-100 flex flex-col">
      <Image className="" src={item.image} alt="User" width={500} height={500}/>
      <div className="flex justify-around">
        <h2 className="text-xl font-bold">{` ${item.name} ${item.lastName}`}</h2>
      </div>
    </div>
  )
}

export default UserCard;