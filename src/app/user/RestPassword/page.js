"use client"
import BackGround from "@/app/_component/background/BackGround";
import Loader from "@/app/_component/loader/loader";
import { Domin } from "@/data/api/Domin";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function RestPassword() {

    const [otp, setOtp] = useState('')
    const [seconds, setSeconds] = useState(60);
    const [isCounting, setIsCounting] = useState(false);
    const [loader , setLoader] = useState(false)
    const getEmail = getCookie('email')
    const [ passCon , setPassCon] = useState('')
    const router = useRouter()

    const [data , setData] = useState({
        email:getEmail,
        password:'',
        otp:''
    })
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

    const handlenum = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 6) {
            setOtp(inputValue);
        }
    };

    useEffect(() => {
        let interval;
        if (isCounting && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isCounting, seconds]);

    function FunTimer(){
        if(isCounting){
            if(seconds === 0){
                return(
                    <button onClick={()=>{resendOTP()}} className="text-gray-700 hover:text-blue-500">ابعت رساله تانيه : <span className="text-blue-400">{seconds}</span></button>
                )
            }
            return(
                <p>{'ابعت رساله تانيه'} : <span className="text-blue-400">{seconds}</span></p>
            )
        }
    }

    function handleChange(e){
        const {name , value} = e.target
        setData(prev => ({
            ...prev, [name] : value
        }))
    }

    function FunLoader(){
        if(loader){
            return(<Loader/>)
        }
    }

    function postData(e){
        e.preventDefault()
        setLoader(true)
        data.otp = otp

        if(passCon == data.password){
            axios({
                url:`${Domin}/password/reset`,
                method:'post',
                data : data
            }).then((res)=>{
                setLoader(false)
                router.replace('/user/login')
                return toast.success('تم اعاده تعيين كلمه السر بنجاح')
                
            }).catch((err)=>{
                setLoader(false)
                return toast.error('حدث خطا ما! حاول مجددا')
            })
        }
        if(passCon != data.password){
            setLoader(false)
            return toast.warn('لازم يكون كلمه السر = تاكيد كلمه السر')
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <BackGround />
            {FunLoader()}
            <div className="p-10 rounded-lg bg-gray-200/80 flex flex-col gap-8 max-sm:w-full max-sm:h-screen items-center justify-center">
                <h2 className="text-[30px] font-bold text-center">اعاده تعيين كلمه المرور</h2>
                <form className="flex flex-col gap-6" onSubmit={postData}>
                    <div>
                        <label className="font-bold">فى رمز وصلك على البريد, اكتبه هنا</label>
                        <div className="w-[300px] relative" dir="rtl">
                            <input id="otp" type={"number"} name="otp" onChange={handlenum} required value={otp} className="py-2 h-14 rounded-md caret-transparent outline-none tracking-[25px] w-full bg-gray-100 focus:bg-white text-gray-600 text-4xl font-extrabold text-start" maxLength={6} />
                            <label htmlFor="otp" className="flex justify-between absolute top-0 right-0 w-full">
                                <div className="w-4 h-14 bg-gray-200/80"></div>
                                <div className="w-2 h-14 bg-gray-200/80"></div>
                                <div className="w-2 h-14 bg-gray-200/80"></div>
                                <div className="w-2 h-14 bg-gray-200/80"></div>
                                <div className="w-2 h-14 bg-gray-200/80"></div>
                                <div className="w-2 h-14 bg-gray-200/80"></div>
                                <div className="w-4 h-14 bg-gray-200/80"></div>
                            </label>
                        </div>
                        <div>
                            {FunTimer()}
                        </div>
                    </div>
                    <div>
                        <label>كلمه السر الجديده</label><br />
                        <input type='password' onChange={handleChange} required minLength={6} name="password" className="border-[3px] focus:border-4 outline-none border-yellow-400 rounded-md w-[350px] h-10 max-sm:w-full" />
                    </div>
                    <div>
                        <label>تاكيد كلمه السر الجديده</label><br />
                        <input type='password' required minLength={6} onChange={(e)=>{setPassCon(e.target.value)}} className="border-[3px] focus:border-4 outline-none border-yellow-400 rounded-md w-[350px] h-10 max-sm:w-full" />
                    </div>
                    <input type='submit' value={'تعيين كلمه سر جديده'} name="password-con" className=" font-bold py-2 px-6 bg-yellow-400"/>
                </form>
            </div>
        </div>
    )
}