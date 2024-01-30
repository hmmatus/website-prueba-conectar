import { UserI } from "@/model/auth/user.model";
import Image from "next/image";

type Props = {
  details: UserI;
};
const DetailsLayout = ({ details }: Props) => {
  return (
    <div className="m-4">
      <h1 className="text-5xl my-2 text-center">Personal Information</h1>
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center">
        <div className="flex flex-1 items-center justify-center">
          <Image
            alt="Profile image"
            src={details.image}
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center lg:shadow-lg">
          <h2 className="text-4xl my-2">{`${details.name} ${details.lastName}`}</h2>
          <h3 className="text-2xl my-2">{`Email: ${details.email}`}</h3>
          <h3 className="text-2xl my-2">{`${details.idType}: ${details.idNumber}`}</h3>
          <h3 className="text-2xl my-2">{`Month Salary: ${details.monthRevenue} $`}</h3>
        </div>
      </div>
    </div>
  );
};

export default DetailsLayout;
