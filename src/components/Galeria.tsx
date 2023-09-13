import { Buttom } from "./Buttom"

export const Galeria = ()=>{
    return(
        <div className=" mt-10 mb-20  flex justify-center items-center ">
            <div className="max-w-7xl  m-auto w-full  ">
                <div className="flex justify-between items-center p-4 max-[1000px]:justify-around">
                    <h2 className="text-3xl font-semibold text-gray-700">Galeria</h2>
                    <Buttom bgcolor="" textcolor="" txt="Ver mais"/>
                </div>
                <div className=" max-w-7xl  max-[1000px]:flex-col max-[1000px]:items-center  p-3  m-auto w-full flex justify-between">
                    <img className=" w-[400px] p-4 max-[1000px]:w-[240px]" src="/assets/img-1.png" alt="" />
                    <img className=" w-[400px] p-4 max-[1000px]:w-[240px]  " src="/assets/img-2.png" alt="" />
                    <img className=" w-[400px] p-4 max-[1000px]:w-[240px]" src="/assets/img-3.png" alt="" />
                </div>
            </div>
        </div>
    )
}