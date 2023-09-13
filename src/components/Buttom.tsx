'use client'
import { useState } from "react";

type ButtonProps = {
    bgcolor:string;
    textcolor:string;
    rounded?:number;
    txt:string;
    border?:string;
    width?:number;
}


export const Buttom = ({bgcolor,textcolor,rounded,txt,border,width}:ButtonProps)=>{0
    return(
        <button style={{background:`${bgcolor}`,color:`${textcolor}`,width,borderRadius:rounded,border}} className=' w-[200px] transition-all  hover:bg-gray-300 hover:text-white border border-gray-200 p-3 text-[#f06e28]'>
            {txt}
        </button>

    )
}