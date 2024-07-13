import BGparticles from "@/components/BGparticles/BGparticles";
import Image from "next/image";
import MrImg from '/public/image/hero.png'
import BGName from '/public/image/bgName.png'
import Link from "next/link";


export default function page() {
    return (
        <div>
            <section className="w-full h-screen max-h-[800px] overflow-hidden">
                <div className="w-full h-full absolute -z-50 bg-gray-200 dark:bg-gray-900"></div>
                <BGparticles />
                <div className="flex justify-center gap-20 h-full max-md:flex-col max-md:items-center">
                    <div className="flex items-center justify-center max-md:absolute max-md:-z-20  max-md:opacity-50 ButtonToTop">
                        <Image src={MrImg} alt="..." className="w-[400px]" />
                    </div>
                    <div className="flex items-start justify-center flex-col gap-10 max-md:items-center">
                        <div className="relative LeftToRightD05">
                            <Image src={BGName} alt="..." className="w-full absolute bottom-0 -z-10" />
                            <p className="inline-block mx-6 text-[60px] text-sky-500 dark:text-sky-300 max-md:mx-2  max-md:text-[30px]">م/</p>
                            <h1 className="font-bold text-[60px] z-10 inline-block text-sky-950 dark:text-sky-200">عمرو ناصر</h1>
                            <div className="w-[90%] h-[60px] bg-sky-300 absolute -translate-y-10 -z-20 left-[5%] skew-x-12 dark:bg-sky-700"></div>
                        </div>
                        <div className="text-[28px] font-bold text text-sky-700 dark:text-sky-300 max-md:text-center">
                            <h1 className="LeftToRightD07">مــــنصة البشمدرس</h1>
                            <p className="LeftToRightD09">  متخــــصــــصــــة في علم الفرياء</p>
                        </div>
                        <div className="opacity">
                            <Link href={'#'} className="font-bold px-8 py-2 bg-sky-500 text-sky-50 skew-x-12 rounded-md">بدا المحاضره الان</Link>
                            
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}