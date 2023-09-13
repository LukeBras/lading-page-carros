import { Buttom } from "./Buttom"

export const Choose = ()=>{
    return(
        <div className=" flex justify-center items-center">
            <div className="max-w-7xl m-auto w-full flex max-[750px]:flex-col max-[1000px]:items-center ">
                <div className="flex flex-col flex-1 max-[1000px]:items-center ">
                    <h1 className="font-semibold text-2xl text-gray-700 mb-4 max-[1000px]:text-center">Escolha a versão que <br /> combina com você.</h1>
                    <div className="flex mt-6 mb-8 w-[450px] justify-between max-[1000px]:justify-evenly ">
                        <Buttom bgcolor={"#f06e28"} textcolor={'white'} rounded={20} txt="Aventador S"/>
                        <Buttom bgcolor="transparent" textcolor="gray" txt="Aventador B7" border="none"/>
                    </div>
                    <img className="w-[500px] mb-3 mt-3 max-[1000px]:w-[300px] max-[1000px]:mb-5" src="/assets/img-carro 1.png" alt="" />
                    <h3>A partir de <span className="text-[#f06e28] font-bold max-[1000px]:mb-3"> R$ 1.150.000,00</span></h3>
                </div>
                <div className="flex flex-1 flex-col justify-evenly max-[1000px]:m-6 ">
                    <h1 className="p-4 text-2xl font-semibold text-gray-600">Diferenciais da Aventador S</h1>
                    <div className="flex items-center border-b-2 p-3">
                        <img className="w-5 h-5 m-3" src="/assets/gas-station-line.png" alt="" />
                        <h2 className="text-[23px] text-gray-600">consumo médio 16.9 litros/100 km</h2>
                    </div>
                    <div className="flex items-center border-b-2 p-3">
                        <img className="w-5 h-5 m-3" src="/assets/timer-line.png" alt="" />
                        <h2 className="text-[23px] text-gray-600">0 aos 100 km/h em 2.9 segundos</h2>
                    </div>
                    <div className="flex items-center border-b-2 p-3">
                        <img className="w-5 h-5 m-3" src="/assets/speed-up-fill.png" alt="" />
                        <h2 className="text-[23px] text-gray-600">Velocidade Máxima de 360 km/h</h2>
                    </div>
                    <div className="flex items-center border-b-2 p-3 mb-4">
                        <img className="w-5 h-5 m-3" src="/assets/flashlight-line.png" alt="" />
                        <h2 className="text-[23px] text-gray-600">Potência Máxima de 740 CV</h2>
                    </div>
                    <Buttom bgcolor={'#f06e28'} textcolor="white" txt="Tenho Interesse"/>
                </div>
            </div>
        </div>  
    )
}