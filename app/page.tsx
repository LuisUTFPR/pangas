import Cars from "./components/cars";

export const revalidate=0
export default function Home() {
  return (
    <div className="bg-[#3d3d3d]">
      <div className="max-w-[1440px] m-auto ">
    <h1> TESTE </h1>
    <Cars />

    </div>
      </div>
  )
}