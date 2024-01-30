import ReactLoading from "react-loading";


const LoadingLayout = () => {
  return (
    <div className="w-100 flex flex-col items-center justify-center">
      <ReactLoading type={"spin"} color={"blue"} height={200} width={200}/>
      <h2 className="text-xl">Loading</h2>
    </div>
  )
}

export default LoadingLayout;