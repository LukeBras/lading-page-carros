export const Social = ()=>{
    return(
        <div className="">
            <div className="max-w-7xl flex justify-between items-center w-full m-auto  max-[1000px]:flex-col  max-[1000px]:items-start  max-[1000px]:m-5 ">

                <div className="my-10">
                    <img src="/assets/Logo.png" />
                    <h2 className="mt-6 text-gray-500">O carro perfeito para você.</h2>
                </div>
                <div>
                    <ul className="flex flex-col">
                        <a className="my-2 font-semibold text-gray-600 hover:text-gray-500" href="">Navegue</a>
                        <a className="my-2 font-semibold text-gray-600 hover:text-gray-500" href="">Galeria</a>
                        <a className="my-2 font-semibold text-gray-600 hover:text-gray-500" href="">Versões</a>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3">redes social</h2>
                    <div className="flex">
                        <img className=" p-2 m-2  cursor-pointer hover:bg-slate-300 border border-gray-400" src="/assets/instagram-line.png" alt="" />
                        <img className=" p-2 m-2  cursor-pointer hover:bg-slate-300 border border-gray-400" src="/assets/whatsapp-line.png" alt="" />
                        <img className=" p-2 m-2  cursor-pointer hover:bg-slate-300 border border-gray-400" src="/assets/twitter-line.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}