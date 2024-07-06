'use client'

import BackGround from "@/app/_component/background/BackGround";
import Loader from "@/app/_component/loader/loader";
import { Domin } from "@/data/api/Domin";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState , useEffect } from "react";
import { toast } from "react-toastify";


export default function SendEmail() {

    const [data, setData] = useState('')
    const [loader, setLoader] = useState(false)
    const router = useRouter()

    function FunLoader() {
        if (loader) {
            return (<Loader />)
        }
    }
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

    function PostData(e) {
        e.preventDefault()
        setLoader(true)

        axios({
            method: 'post',
            url: `${Domin}/password/forgot`,
            data: {
                email : data
            }
        }).then((res) => {
            setLoader(false)
            if (res.data.message == "Validation errors") {
                return toast.warn('لا يوجد حساب بهذا البريد')
            } else {
                setCookie('email',data)
                router.replace('/user/RestPassword')
                return toast.success('تم ارسال رمز الى البريد الالكترونى')
            }
        }).catch((err) => {
            setLoader(false)
            console.log(err)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }



    return (
        <div className="w-full h-screen flex justify-center items-center ">
            {FunLoader()}
            <BackGround />
            <div className="p-10 rounded-lg bg-gray-200/80 max-sm:h-screen max-sm:w-full flex items-center justify-center">
                <form onSubmit={PostData} className="flex flex-col gap-6 items-center">
                    <h2 className="font-bold text-[30px]">نسيت كلمه السر</h2>
                    <div>
                        <label>البريدالالكترونى</label><br />
                        <input type="email" required onChange={(e) => { setData(e.target.value) }} className="w-[350px] rounded-md max-sm:w-full h-10 border-[3] focus:border-4 border-yellow-400 outline-none" />
                    </div>
                    <input type="submit" value={'ارسال رساله'} className="py-2 px-6 w-full rounded-md font-bold bg-yellow-400" />
                </form>
            </div>
        </div>
    )
}