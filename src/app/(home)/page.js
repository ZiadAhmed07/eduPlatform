import Image from "next/image";
import Link from "next/link";
import ImageHero from '/public/image/hero.png'
import Img1 from '/public/image/about .png'

import img1 from '/public/image/1.png'
import img2 from '/public/image/2.png'
import img3 from '/public/image/3.png'
import img5 from '/public/image/5.jpg'
import Gradients from "../_component/gradients/gradients";
import SchoolYear from "../_component/SchoolYear/SchoolYear";
import DivAbout from "../_component/AboutSection/DivAbout";
import Loader from "../_component/loader/loader";

export default function Home() {


    return (
        <div>
            <div className=" h-screen max-h-[900px]  relative -z-20"></div>
            <section className='fixed max-w-[1360px] w-full max-h-[900px] h-screen top-0 -z-10 overflow-hidden'>
                <div className='absolute w-full max-h-[900px] h-screen -z-10'>
                    <div className="w-[320px] h-[320px] rounded-full bg -translate-x-[600px] translate-y-[550px] bg-yellow-400/30 absolute"></div>
                    <div className="w-[250px] h-[250px] rounded-full bg -translate-x-[80px] translate-y-[400px] bg-emerald-500/30 absolute"></div>
                    <div className="w-[170px] h-[170px] rounded-full bg -translate-x-[750px] translate-y-[100px] bg-emerald-500/30 absolute"></div>
                    <div className="w-[150px] h-[150px] rounded-full bg -translate-x-[300px] translate-y-[150px] bg-yellow-400/30 absolute"></div>
                </div>
                <div className="flex justify-between items-center max-h-[900px] h-screen md:px-10 max-md:flex-col pt-[120px] px-6">
                    <div className="font-bold text-[30px] flex flex-col gap-6 max-md:text-center ">
                        <p className="RightToLeftD05">مرحبا بك في نصه </p>
                        <h1 className="RightToLeftD07 text-[70px] text-yellow-400">م / اسم المدرس</h1>
                        <div>
                            <p className="RightToLeftD09">تعلم في أي وقت ومن أي مكان</p>
                            <p className="RightToLeftD09">مع أفضل المواد التعليمية بين يديك</p>
                        </div>
                        <div className="mt-10 opacity">
                            <Link href={"#"} className='cursor-pointer bg-yellow-400 font-bold px-6 py-2 rounded-md'>ابداء دروسك الان</Link>
                        </div>
                    </div>
                    <div className="h-full flex items-end max-md:absolute max-md:-z-10 max-md:opacity-70 max-md:-translate-y-[120px] ">
                        <Image src={ImageHero} alt='...' width={400} className='ButtonToTop' />
                    </div>
                </div>
            </section>

            <section className="bg-yellow-400 h-[700px] relative overflow-hidden max-lg:h-[1000px]">
                <div className=' flex items-center justify-center gap-20 max-lg:flex-col'>
                    <Image src={Img1} alt='...' width={500} />
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[60px] max-sm:text-[50px] text-white max-sm:px-6"><span>مكانك الافضل </span><br /><span>لتحقيق اهدافك</span></h2>
                        <p className="max-w-[400px] max-sm:w-full text-white font-bold max-sm:px-6">
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className=" z-10">
                        <Link href={"#SchoolYears"} className='font-bold border-2 border-yellow-400 text-[20px] bg-white rounded-sm text-black px-6 py-2 w-fit'>ابدا دروسك الان</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[500px] h-[500px] rounded-full bg-white absolute -bottom-[250px] translate-x-[100px]"></div>
                    <div className="w-[500px] h-[500px] rounded-full bg-white absolute -bottom-[400px] -translate-x-[300px]"></div>
                    <div className="w-[500px] h-[500px] rounded-full bg-white absolute -bottom-[410px] -translate-x-[600px]"></div>
                    <div className="w-[500px] h-[500px] rounded-full bg-white absolute -bottom-[330px] -translate-x-[950px]"></div>
                </div>
            </section>
            
            <DivAbout translateX={'100%'} img={img1} titel={'وفر وقت السناتر والموصلات'} color={'emerald-500'} revers={'flex-row-reverse'} />
            <DivAbout translateX={'-100%'} img={img2} titel={' احضر البيت من البيت'} color={'yellow-400'} revers={''} />
            <DivAbout translateX={'100%'} img={img3} titel={'عيد الحصه اكتر من مره'} color={'emerald-500'} revers={'flex-row-reverse'} />

            <dsectioniv id='SchoolYears' className="py-10 min-h-[500px] h-auto bg-yellow-400 flex flex-col gap-20 justify-center">
                <div className="w-full flex justify-center ">
                    <p className="text-[60px] text-center">اختار السنه الدراسيه</p>
                </div>
                <div className="flex justify-around flex-wrap gap-10 max-sm:flex-col items-center">
                    <SchoolYear titel={'الصف الاول'} number={'1'} delay={0}/>
                    <SchoolYear titel={'الصف الثانى'} number={'2'} delay={0.5}/>
                    <SchoolYear titel={'الصف الثالث'} number={'3'} delay={1}/>
                </div>
            </dsectioniv>

            <section className="min-h-[600px] flex justify-between items-center gap-10 px-20 bg-white overflow-hidden max-md:flex-col max-md:pt-20">
                <form className="flex flex-col gap-4 w-[320px]">
                    <p className="text-[40px]">تواصل معنا </p>
                    <input required className="border-b p-2" type={'text'} placeholder='الاسم كامل'/>
                    <input required className="border-b p-2" type={'number'} placeholder="رقم الهاتف"/>
                    <textarea required placeholder="الرساله"  className="border p-2"/>
                    <input type={'submit'} className='py-2 px-6 bg-emerald-500 rounded-md text-white font-bold cursor-pointer' value={'ارسال'}/>
                </form>
                <Image src={img5} alt='..' className="w-[500px] max-lg:w-[400px]"/>
            </section>
            
        </div>
    )
}