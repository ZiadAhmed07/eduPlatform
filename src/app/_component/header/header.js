'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from '/public/logo.png'
import { deleteCookie, getCookie } from "cookies-next";
import axios from "axios";
import { Domin } from "@/data/api/Domin";
import Loader from "../loader/loader";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Header() {

    const [styleNav, setStyleNav] = useState('absolute')
    const [styleNavDiv, setStyleNavDiv] = useState('')
    const [userData, setUserData] = useState(false)
    const [hiddenButUser , setHiddenButUser] = useState('hidden')
    const [loader , setLoader] = useState(false)
    const router = useRouter('')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                setStyleNav('fixed bg-gray-100/80')
            }
            if (window.scrollY < 800) {
                setStyleNav('absolute')
            }
        })
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const getData = await getCookie('userData');
            const json = await JSON.parse(getData)
            setUserData(json)
        };
        if(getCookie('userData')){
            fetchData()
        }
    }, []);

    function ButUser() {
        if (!userData) {
            return (
                <div>
                    <div className=" hidden gap-6 md:flex">
                        <Link href={'/user/Register'} className='bg-yellow-400 w-[180px] h-[40px] rounded-md flex items-center justify-center font-bold text-lg text-gray-900' >انشاء حساب</Link>
                        <Link href={'/user/login'} className='hover:bg-yellow-400 text-gray-900 w-[180px] h-[40px] rounded-md flex items-center justify-center font-bold text-lg hover:text-gray-900 transition' >تسجيل الدخول</Link>
                    </div>
                    <Link href={"/user/login"} className='flex items-center gap-3 md:hidden'>
                        <div className="flex  w-[50px] h-[50px] rounded-full bg-yellow-400/50 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" text-black font-bold bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                        </div>
                        <p className="font-bold text-[20px]">دخول</p>
                    </Link>
                </div>
            )
        } if (userData) {
            return (
                <div>
                    <div onClick={()=>{setHiddenButUser('')}} className="w-[50px] h-[50px] bg-yellow-400 hover:bg-yellow-500 cursor-pointer rounded-full flex items-center justify-center text-emerald-500 font-bold text-2xl">
                        {userData.user.name[0]}
                    </div>
                    <div className={`${hiddenButUser}`}>
                        <div className="p-6 rounded-lg bg-gray-200 absolute top-[70px] w-[350px] max-sm:w-[300px] z-10 flex flex-col gap-6">
                            <div className="flex items-center justify-center gap-4 flex-col">
                                <div className="w-[50px] h-[50px] bg-yellow-400 rounded-full flex items-center justify-center text-emerald-500 font-bold text-2xl">{userData.user.name[0]}</div>
                                <div className="text-center">
                                    <p>مرحبا {userData.user.name}</p>
                                    <p>{userData.user.email}</p>
                                </div>
                            </div>
                            <div className="w-full h-[2px] bg-yellow-400"></div>
                            <div className="flex justify-center items-center gap-6">
                                <Link href={'/user'} className="w-[120px] text-center py-1 rounded-md font-bold text-emerald-500 hover:bg-yellow-400 transition">الحساب</Link>
                                <button onClick={FunLogout} className="w-[120px] py-1 text-center rounded-md font-bold text-emerald-500 hover:bg-yellow-400 transition">تسجيل الخروج</button>
                            </div>
                        </div>
                        <div onClick={()=>{setHiddenButUser('hidden')}} className="fixed w-full h-screen bg-gray-200/0 top-0 right-0"></div>
                    </div>
                </div>
            )
        }

    }

    function FunLogout(){
        setLoader(true)
        axios({
            url:`${Domin}/auth/logout`,
            method:'post',
            headers:{
                'Authorization':`Bearer ${userData.access_token}`
            }
        }).then((res)=>{
            setLoader(false)
            if(res.data.message == 'User successfully signed out'){
                deleteCookie('userData')
                router.replace('/user/login')
                return toast.success('تم تسجيل الخروج')
            }
        }).catch((err)=>{
            setLoader(false)
            console.log(err)
            return toast.error('حدث خطا ما ! حاول مجددا')
        })
    }

    function FunLoader(){
        if(loader){
            return(<Loader/>)
        }
    }

    return (
        <div className={`max-w-[1360px] w-full h-20 flex items-center top-0 ${styleNav} z-50`}>
            {FunLoader()}
            <nav className="flex justify-between items-center px-6 h-[60px] w-full">
                {ButUser()}
                <div>
                    <Image src={Logo} alt='...' height={50} />
                </div>
            </nav>
        </div>
    )
}