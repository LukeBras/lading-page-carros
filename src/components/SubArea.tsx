import { Buttom } from "./Buttom"

export const SubArea = () =>{
    return(
        <div className="h-[500px] m-10  flex justify-center items-center ">
            <div className="max-w-7xl shadow-2xl flex p-5 bg-[#515150] w-full h-full m-auto  max-[1000px]:flex-col ">
                <div className="flex flex-1 justify-center items-start flex-col">
                    <div className="flex flex-col justify-start items-center w-full  max-[1000px]:justify-between">
                        <h1 className="text-2xl mb-2 text-white">Inscreva-se e receba <br /> todas as novidades.</h1>
                        <input className="w-[300px] outline-none h-[50px] p-2 mb-4" type="text" placeholder="Digite seu melhor e-mail" />
                        <Buttom bgcolor="#f06e28" width={300} textcolor="white" txt="Realizar inscrição" border="none"/>
                    </div>
                </div>
                <div className="flex flex-1 justify-center items-center ">
                    <img className="w-full h-auto  max-[1000px]:w-[350px]" src="./assets/banner.png" alt="" />
                </div>
            </div>
        </div>
    )
}