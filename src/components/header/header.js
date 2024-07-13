import Image from "next/image"
import Logo from "/public/logo.png"
import Link from "next/link"

export default function Header() {
    return (
        <div className="w-full h-[70px] z-50 absolute top-0 flex justify-between px-10">
            <div className="flex gap-6 items-center max-md:hidden">
                <Link href={"/auth"} className="flex gap-4 px-8 py-2 rounded-md transition bg-sky-500 hover:bg-sky-600 text-sky-50 h-fit items-center">
                    <p>انشاء حساب</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                    </svg>
                </Link>
                <Link href={"/auth"} className="h-fit px-8 py-2 transition flex gap-4 rounded-md text-sky-600 hover:text-sky-50 hover:bg-sky-500 dark:text-sky-300">
                    <p>تسجيل الدخول</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                        <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                    </svg>
                </Link>
            </div>
            <div className="flex  items-center md:hidden">
            <Link href={"/auth"} className="h-fit px-8 py-2 transition flex gap-4 rounded-md text-sky-50 bg-sky-500 hover:bg-sky-600">
                    <p>دخول</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                        <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                    </svg>
                </Link>
            </div>
            <div className="flex gap-4 items-center ">
                <Link href={'https://zaha-script.vercel.app/'} target="_blank">
                    <Image src={Logo} alt="..." className="h-[40px] w-[80px]" />
                </Link>
            </div>
        </div>
    )
}