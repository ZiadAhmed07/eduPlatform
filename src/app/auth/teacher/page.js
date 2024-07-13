"use client"

import BackGround from "@/components/background/BackGround";
import Link from "next/link";
import { useState } from "react";


export default function page(){

    const [data, setData] = useState({
        email: '',
        password: '',
    })


    function handleChange(e){
        const { name, value } = e.target
        setData(
            prevData => ({...prevData , [name] : value})
        )
    }

    return(
        <div className=" w-full h-auto min-h-screen  flex items-center justify-center">
            <BackGround/>
            <div className="bg-gray-50  max-sm:h-screen sm:-translate-y-[40px] flex flex-col justify-between max-sm:bg-gray-200/80 max-sm:w-full max-sm:dark:bg-gray-700 max-sm:dark:bg-gray-700/80 shadow-xl rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 ">
                    <Link href={'/auth/teacher'} className="font-bold px-6 py-2 text-center " >دخول</Link>
                    <Link href={'/auth/teacher/signup'} className="bg-gray-200 dark:bg-gray-800 px-6 py-2 shadow-inner text-center"   >حساب جديد</Link>
                </div>
                <div className=" p-6 flex flex-col items-center  max-sm:h-full max-sm:justify-center">
                    <p className="text-[23px] font-bold text-sky-600 dark:text-sky-200">تسجيل الدخول</p>
                    <form className="w-[600px] gap-4 py-6 flex flex-col max-sm:w-full items-center">    
                        <div>
                            <label>البريد الالكترونى</label><br/>
                            <input type="text" required name="email" onChange={handleChange} className=" max-sm:w-full h-10 border-2 focus:border-[3px] outline-none border-sky-300 rounded-md px-2 bg-inherit"/>
                        </div>
                        <div>
                            <label>كلمه السر </label><br/>
                            <input type="text" required name="password" onChange={handleChange} className=" max-sm:w-full h-10 border-2 focus:border-[3px] outline-none border-sky-300 rounded-md px-2 bg-inherit"/>
                        </div>

                        <div className=" text-center ">
                            <input value={"تسجيل الدخول"} type="submit" className="cursor-pointer px-10 py-2 bg-sky-500 hover:bg-sky-600 rounded-md text-sky-50"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}