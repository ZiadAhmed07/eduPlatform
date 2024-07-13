"use client"

import BackGround from "@/components/background/BackGround";
import Link from "next/link";
import { useState } from "react";


export default function page() {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        teacherPhoNum: '',
        subject: '',
    })


    function handleChange(e) {
        const { name, value } = e.target
        setData(
            prevData => ({ ...prevData, [name]: value })
        )
    }

    return (
        <div className=" w-full h-auto min-h-screen  flex items-center justify-center">
            <BackGround />
            <div className="bg-gray-50 max-sm:bg-gray-200/80 max-sm:w-full max-sm: dark:bg-gray-700 max-sm:dark:bg-gray-700/80 shadow-xl rounded-lg overflow-hidden">
                <div className="grid grid-cols-2">
                    <Link href={'/auth/teacher'} className="bg-gray-200 dark:bg-gray-800 px-6 py-2 shadow-inner text-center" >دخول</Link>
                    <Link href={'/auth/teacher/signup'} className="font-bold px-6 py-2 text-center " >حساب جديد</Link>
                </div>
                <div className=" p-6 flex flex-col items-center">
                    <p className="text-[23px] font-bold text-sky-600 dark:text-sky-200">انشاء حساب جديد</p>
                    <form className="w-[600px] grid grid-cols-2 gap-4 py-6 max-sm:flex flex-col max-sm:w-full">
                        <div>
                            <label>اسم الطالب</label><br />
                            <input type="text" required name="name" onChange={handleChange} className=" w-full h-10 border-2 focus:border-[3px] outline-none border-sky-300 rounded-md px-2 bg-inherit" />
                        </div>
                        <div>
                            <label>البريد الالكترونى</label><br />
                            <input type="email" required name="email" onChange={handleChange} className=" w-full h-10 border-2 focus:border-[3px] outline-none border-sky-300 rounded-md px-2 bg-inherit" />
                        </div>
                        <div>
                            <label>كلمه السر </label><br />
                            <input type="password" required name="password" onChange={handleChange} className=" w-full h-10 border-2 focus:border-[3px] outline-none border-sky-300 rounded-md px-2 bg-inherit" />
                        </div>
                        <div>
                            <label>تاكيد كلمه السر</label><br />
                            <input type="password" required name="password_confirmation" onChange={handleChange} className=" w-full h-10 border-2 focus:border-[3px] outline-none border-sky-300 rounded-md px-2 bg-inherit" />
                        </div>
                        <div>
                            <label>رقم التليفون</label><br />
                            <input type="number" required name="teacherPhoNum" onChange={handleChange} className=" w-full h-10 border-2 focus:border-[3px] outline-none border-sky-300 rounded-md px-2 bg-inherit" />
                        </div>
                        <div>
                            <label>الماده الدراسيه</label><br />
                            <input type="text" required name="subject" onChange={handleChange} className=" w-full h-10 border-2 focus:border-[3px] outline-none border-sky-300 rounded-md px-2 bg-inherit" />
                        </div>
                        <div className="col-start-1 col-end-3 text-center ">
                            <input value={"انشاء حساب"} type="submit" className="cursor-pointer px-10 py-2 bg-sky-500 hover:bg-sky-600 rounded-md text-sky-50" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}