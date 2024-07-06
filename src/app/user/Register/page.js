'use client'

import BackGround from "@/app/_component/background/BackGround";
import Loader from "@/app/_component/loader/loader";
import Link from "next/link";
import { useState , useEffect } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { Domin } from "@/data/api/Domin";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

export default function Register() {

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
    const [loader , setLader] = useState(false)
    const router  = useRouter()
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

    const handleChange = (e) => {
        const { name, value } = e.target
        setData(
            prevData => ({...prevData , [name] : value})
        )
    };

    function FunLader(){
        if(loader){
            return(<Loader/>)
        }
    }

    function PostData(e){
        e.preventDefault()
        setLader(true)
        if(data.password != data.password_confirmation){
            setLader(false)
            return toast.warn('لازم تكون كلمه السر بتساوى تاكيد كلمه السر, ارجع غيرها!')
        }
        if(data.parentPhoNum == data.studentPhoNum){
            setLader(false)
            return toast.warn('اكتب رقم ولى امرك الحقيقي , بلاش تتذاكى')
        }
        if(data.studentPhoNum.length != 11){
            setLader(false)
            return toast.warn('اكتب رقم التليفون صح , يجب ان يكون رقم مصرى مكون من 11 رقم ')
        }
        if(data.parentPhoNum.length != 11){
            setLader(false)
            return toast.warn('اكتب رقم التليفون صح , يجب ان يكون رقم مصرى مكون من 11 رقم ')
        }
        else{
            axios({
                url:`${Domin}/auth/register`,
                method:'post',
                data: data
            }).then((res)=>{
                setLader(false)
                if(res.data.message == 'Registration successful!'){
                    router.replace('/user/login')
                    return toast.success('تم انشاء الحساب بنجاح')
                }
                if(res.data.message == "Validation errors"){
                    return toast.warning('هذا الحساب مستخدم من قبل')
                }
            }).catch((err)=>{
                setLader(false)
                console.log(err)
                return toast.error('حدث خطا ما! حاول مجددا')
            })
        }

    }

    return (
        <div className="w-full h-screen">
            {FunLader()}
            <BackGround />
            <div className="w-full h-full flex items-center justify-center">
                <form onSubmit={PostData} className="grid grid-cols-2 gap-6 bg-gray-200/80 p-10 max-sm:p-4 rounded-lg max-md:grid-cols-1 max-md:pt-40 max-sm:pt-40 max-md:w-full max-md:flex flex-col items-center justify-center">
                    <h2 className='col-start-1 col-end-3 max-md:col-end-2 text-center font-bold text-[30px] text-yellow-500'>انشاء حساب</h2>
                    <div>
                        <label>الاسم بالكامل</label><br />
                        <input type={'text'} placeholder='زياد احمد' name="name" required onChange={handleChange} className="w-[300px] max-md:w-[500px] max-sm:w-full h-10 border-[3px] focus:border-4 rounded-md px-4 outline-none text-emerald-500 border-yellow-400" />
                    </div>
                    <div>
                        <label>البريد الالكترونى</label><br />
                        <input type={'email'} placeholder='zaha@gmail.com' name="email" required onChange={handleChange} className="w-[300px] max-md:w-[500px] max-sm:w-full h-10 border-[3px] focus:border-4 rounded-md px-4 outline-none text-emerald-500 border-yellow-400" />
                    </div>
                    <div>
                        <label>رقمك تليفونك</label><br />
                        <input type={'number'} placeholder='01205340155' name="studentPhoNum" required onChange={handleChange} className="w-[300px] max-md:w-[500px] max-sm:w-full h-10 border-[3px] focus:border-4 rounded-md px-4 outline-none text-emerald-500 border-yellow-400" />
                    </div>
                    <div>
                        <label>رقم تليفون ولى الامر</label><br />
                        <input type={'number'} placeholder='01287972828' name="parentPhoNum" required onChange={handleChange} className="w-[300px] max-md:w-[500px] max-sm:w-full h-10 border-[3px] focus:border-4 rounded-md px-4 outline-none text-emerald-500 border-yellow-400" />
                    </div>
                    <div>
                        <label>المحافظه</label><br />
                        <input type={'text'} placeholder='الاسكندريه' name="governorate" required onChange={handleChange} className="w-[300px] max-md:w-[500px] max-sm:w-full h-10 border-[3px] focus:border-4 rounded-md px-4 outline-none text-emerald-500 border-yellow-400" />
                    </div>
                    <div>
                        <label>السنه الدراسيه</label><br />
                        <div>
                            <div className="flex justify-around items-center w-[300px] max-md:w-[500px] max-sm:w-[300px] h-10 border-[3px] rounded-md outline-none text-emerald-500 border-yellow-400">
                                <div className={data.grade === 'firstGrade' ? 'bg-emerald-500 text-white p-1 rounded-md' : ''}>
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
                                <div className={data.grade === 'secondGrade' ? 'bg-emerald-500 text-white p-1 rounded-md' : ''}>
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
                                <div className={data.grade === 'thirdGrade' ? 'bg-emerald-500 text-white p-1 rounded-md' : ''}>
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
                        <label>كلمه المرور</label><br />
                        <input type={'password'} minLength={6} placeholder='' name="password" required onChange={handleChange} className="w-[300px] h-10 max-md:w-[500px] max-sm:w-full border-[3px] focus:border-4 rounded-md px-4 outline-none text-emerald-500 border-yellow-400" />
                    </div>
                    <div>
                        <label>تاكيد كلمه المرور</label><br />
                        <input type={'password'} minLength={6} placeholder='' name="password_confirmation" required onChange={handleChange} className="w-[300px] h-10 max-md:w-[500px] max-sm:w-full border-[3px] focus:border-4 rounded-md px-4 outline-none text-emerald-500 border-yellow-400" />
                    </div>
                    <div className="text-center  w-full col-start-1 col-end-3 max-md:col-end-2">
                        <input type={'submit'} value='انشاء حساب' className=' bg-yellow-400 cursor-pointer w-fit px-8 py-2 focus:border-4 rounded-md font-bold outline-none' />
                    </div>
                    <div className="text-center  w-full col-start-1 col-end-3 max-md:col-end-2">
                        <p>انا عند حساب وعايز اسجل بيه,<Link href={'/user/login'} className='text-emerald-500' >تسجيل الدخول</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}