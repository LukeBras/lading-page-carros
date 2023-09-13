import { Buttom } from "./Buttom"


export const Header = ()=>{
    return(
        <div className="h-[100px] bg-[#f8f8f8] border-b border-gray-300">
            <div className="max-w-5xl w-full flex justify-between items-center m-auto h-full  ">
                <div className="flex justify-between w-[300px] ">
                    <img className="w-24 mr-5 cursor-pointer" src="/assets/Logo.png" alt="" />
                    <a className="text-xl text-gray-400" href="">Galeria</a>
                    <a className="text-xl text-gray-400" href="">Versões</a>
                </div>
                <Buttom bgcolor="transparent" textcolor="#f06e28" txt="Tenho interesse"/>
            </div>
        </div>
    )
}