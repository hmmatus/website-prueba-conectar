import { UserI } from "@/model/auth/user.model";
import Image from "next/image";

type Props = {
  details: UserI;
};
const DetailsLayout = ({details}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center">
      <div className="flex flex-1 ">
        <Image alt="Profile image" src={details.image} width={200} height={200}/>
      </div>
      <div className="flex flex-1 flex-col">
        <h1>{`${details.name} ${details.lastName}`}</h1>
        <h1>{`Email: ${details.email}`}</h1>
        <h1>{`${details.department}, ${details.city}`}</h1>
      </div>
    </div>
  )
}

export default DetailsLayout;