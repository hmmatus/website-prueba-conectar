import Image from "next/image"

type Props = {
  errorMessage: string;
}
const ErrorLayout = ({errorMessage}: Props) => {
  return (
    <div className="w-100 flex flex-col items-center justify-center">
      <Image width={200} height={200} alt="Error image" src={"/images/error-icon.svg"} />
      <h2 className="text-lg text-bold">{errorMessage}</h2>
    </div>
  )
}

export default ErrorLayout;