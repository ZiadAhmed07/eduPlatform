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
        studentPhoNum: '',
        parentPhoNum: '',
        grade: '',
        governorate: ''
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
                    <Link href={'/auth/student'} className="bg-gray-200 dark:bg-gray-800 px-6 py-2 shadow-inner text-center" >دخول</Link>
                    <Link href={'/auth/student/signup'} className="font-bold px-6 py-2 text-center " >حساب جديد</Link>
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
                            <label>المحافظه</label><br />
                            <input type="text" required name="governorate" onChange={handleChange} className=" w-full h-10 border-2 focus:border-[3px] outline-none border-sky-300 rounded-md px-2 bg-inherit" />
                        </div>
                        <div>
                            <label>السنه الدراسيه</label><br />
                            <div>
                                <div className="flex justify-around items-center w-full h-10 border-[3px] rounded-md outline-none text-sky-500 border-sky-300">
                                    <div className={data.grade === 'firstGrade' ? 'bg-sky-600 text-white p-1 rounded-md' : ''}>
                                        <label htmlFor="firstGrade">الصف الاول</label>
                                        <input
                                            id="firstGrade"
                                            type="radio"
                                            name="grade"
                                            value="firstGrade"
                                            onChange={handleChange}
                                            className='absolute opacity-0'
                                        />
                                    </div>
                                    <div className={data.grade === 'secondGrade' ? 'bg-sky-600 text-white p-1 rounded-md' : ''}>
                                        <label htmlFor="secondGrade">الصف الثانى</label>
                                        <input
                                            id="secondGrade"
                                            type="radio"
                                            name="grade"
                                            value="secondGrade"
                                            onChange={handleChange}
                                            className='absolute opacity-0'
                                        />
                                    </div>
                                    <div className={data.grade === 'thirdGrade' ? 'bg-sky-600 text-white p-1 rounded-md' : ''}>
                                        <label htmlFor="thirdGrade">الصف الثالث</label>
                                        <input
                                            id="thirdGrade"
                                            type="radio"
                                            name="grade"
                                            value="thirdGrade"
                                            onChange={handleChange}
                                            className='absolute opacity-0'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>رقم التليفون</label><br />
                            <input type="number" required name="studentPhoNum" onChange={handleChange} className=" w-full h-10 border-2 focus:border-[3px] outline-none border-sky-300 rounded-md px-2 bg-inherit" />
                        </div>
                        <div>
                            <label>رقم تليفون ولي الامر</label><br />
                            <input type="number" required name="parentPhoNum" onChange={handleChange} className=" w-full h-10 border-2 focus:border-[3px] outline-none border-sky-300 rounded-md px-2 bg-inherit" />
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