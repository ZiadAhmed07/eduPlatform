import Image from "next/image";
import image from '/public/image/footer.webp'
import Logo from '/public/logo.png'
import SImg1 from '/public/icon/icons8-facebook-94.png'
import SImg2 from '/public/icon/icons8-whatsapp-94.png'
import SImg3 from '/public/icon/icons8-google-94.png'
import Link from "next/link";



export default function Footer() {
    return (
        <div className="h-[500px] bg-gray-800 relative overflow-hidden flex justify-center">
            <Image src={image} alt='...' className="w-[500px] max-sm:w-full absolute bottom-0 left-0 max-md:opacity-30"/>
            <div className="w-[320px] flex flex-col gap-6 pt-20 items-center z-10">
                <h1 className="text-[50px] text-white">اسم المدرس</h1>
                <span className='bg-yellow-400 h-2 w-full' ></span>
                <div className="flex gap-6 justify-center">
                    <Link href={'#'}>
                        <Image src={SImg1} alt='..' width={40} />
                    </Link>
                    <Link href={'#'}>
                        <Image src={SImg2} alt='..' width={40} />
                    </Link>
                    <Link href={'#'}>
                        <Image src={SImg3} alt='..' width={40} />
                    </Link>
                </div>
            </div>
            <div className='absolute bottom-0 right-0 px-20 py-4 flex gap-6 z-20 max-sm:px-0 max-sm:justify-center max-sm:w-full'>
                <Image src={Logo} alt='...' width={50} />
                <p className="text-[20px] font-bold text-white">Made by <a href="https://zaha-script.vercel.app/" target={'_blank'} className='text-blue-500'>Zaha Script</a></p>
            </div>
        </div>
    )
}