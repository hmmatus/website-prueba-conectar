import { UserI } from "@/model/auth/user.model";

type Props = {
  details: UserI;
};
const DetailsLayout = ({details}: Props) => {
  return (
    <div>
      <h2>{details.name}</h2>
    </div>
  )
}

export default DetailsLayout;