import { Buttom } from "./Buttom"

export const Banner = ()=>{
    return(
        <div className="h-[700px] flex justify-center  items-center bg-gray-100 ">
            <div className="max-w-7xl p-4  w-full flex justify-between m-auto max-[1000px]:flex-col  max-[1000px]:items-center ">
                 <div className="flex flex-col justify-center items-start">
                    <h1 className=" max-[1000px]:text-3xl   text-6xl font-bold text-gray-600 mb-4">O CARRO <br /> PERFEITO <br /> PARA <span className="text-[#f06e28]">VOCÊ.</span></h1>
                    <p className="max-[1000px]:text-xl   text-2xl mb-6 text-gray-600 ">Cuidado,essa máquina <br /> vai te deixar apaixonado!</p>
                    <Buttom bgcolor={'#f06e28'} textcolor="white" txt="Tenho interesse"/>
                 </div>
                 <img className="max-[1000px]:w-[400px] max-[1000px]:mt-6 " src="./assets/banner.png" alt="" />
                 
            </div>
        </div>
    )
}