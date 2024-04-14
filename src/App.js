import Display from "./Components/Display";
import Controller from "./Components/controller";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className=" justify-center p-10 items-center m-16 flex flex-col gap-8  border-black border-[1px]">
      <Header/>
      <Display/>
      <Controller/>

    </div>
  )
}