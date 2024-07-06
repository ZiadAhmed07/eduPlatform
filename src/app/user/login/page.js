'use client'

import BackGround from "@/app/_component/background/BackGround";
import Loader from "@/app/_component/loader/loader";
import Link from "next/link";
import { useState , useEffect } from "react";
import axios from 'axios'
import { Domin } from "@/data/api/Domin";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export default function Login() {

    const [data ,setData] = useState({
        email:'',
        password:''
    })
    const [loader , setloader] = useState(false)
    const router = useRouter()
    const [userData , setUserData] = useState(false)

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

    if(userData){
        router.replace('/')
    }

    function handleChange(e){
        const {name , value} = e.target
        setData(
            prevData => ({...prevData , [name] : value})
        )
    }

    function FunLoader(){
        if(loader){
            return(<Loader/>)
        }
    }

    function postData(e){
        e.preventDefault()
        setloader(true)

        axios({
            url:`${Domin}/auth/login`,
            method:'post',
            data:data
        }).then((res)=>{
            setloader(false)
            setCookie('userData',res.data)
            router.push('/')
        }).catch((err)=>{
            setloader(false)
            console.log(err)
            return toast.error('تاكد من البريد و كلمه السر')
        })
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <BackGround />
            {FunLoader()}
            <div className="p-10 rounded-lg bg-gray-200/80 flex flex-col items-center gap-6 max-sm:w-full max-sm:h-full justify-center">
                <h2 className="font-bold text-[30px]">تسجيل الدخول</h2>
                <form onSubmit={postData} className="flex flex-col gap-6">
                    <div>
                        <label>البريد الالكترونى</label><br/>
                        <input type={"email"} name="email" required onChange={handleChange} className="w-full px-2 text-emerald-500 font-bold h-10 rounded-md border-[3px] focus:border-4 outline-none border-yellow-400"/>
                    </div>
                    <div>
                        <div className="flex justify-between">
                        <label>كلمه المرور</label>
                        <Link href={'/user/SendEmail'} className="text-emerald-500">نسيت كلمه السر</Link>
                        </div>
                        <input type={"password"} name="password" onChange={handleChange}  required className="w-full px-2 text-emerald-500 font-bold h-10 rounded-md border-[3px] focus:border-4 outline-none border-yellow-400"/>
                    </div>
                    <div>
                        <input type='submit' value={"تسجيل الدخول"} className="py-2 px-8 text-center cursor-pointer rounded-md bg-yellow-400 font-bold w-full"/>
                    </div>
                    <Link href={'/user/Register'}> انا معنديش حساب ,<span className="text-emerald-500">انشاء حساب</span> </Link>
                </form>
            </div>
        </div>
    );
}
