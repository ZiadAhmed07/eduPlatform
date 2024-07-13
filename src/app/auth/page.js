import student from '/public/icon/student.png'
import parent from '/public/icon/parent.png'
import teacher from '/public/icon/teacher.png'
import Link from 'next/link'
import Image from 'next/image'

export default function page() {
    return (
        <div className="w-full h-auto min-h-screen bg-gray-200 dark:bg-gray-900 flex items-center justify-center">
            <div className='flex flex-col gap-8 items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow-xl max-sm:gap-2'>
                <p className='text-[35px] font-bold dark:text-sky-200 text-sky-500'>اختار نوع الحساب </p>
                <div className='flex gap-6 max-sm:flex-col max-sm:gap-0'>
                    <Link href={"/auth/student"} className=' p-6 max-sm:p-3 flex flex-col items-center gap-2 hover:bg-sky-100 dark:hover:bg-sky-700 rounded-md transition'>
                        <div className='bg-orange-500 rounded-full p-3'>
                            <Image src={student} alt='...' width={100} height={100} />
                        </div>
                        <p className='font-bold text-[20px]'>طالب</p>
                    </Link>
                    <Link href={"/auth/parent"} className=' p-6 max-sm:p-3 flex flex-col items-center gap-2 hover:bg-sky-100 dark:hover:bg-sky-700 rounded-md transition'>
                        <div className='bg-blue-500 rounded-full p-3'>
                            <Image src={parent} alt='...' width={100} height={100} />
                        </div>
                        <p className='font-bold text-[20px]'>ولى الامر </p>
                    </Link>
                    <Link href={"/auth/teacher"} className=' p-6 max-sm:p-3 flex flex-col items-center gap-2 hover:bg-sky-100 dark:hover:bg-sky-700 rounded-md transition'>
                        <div className='bg-green-500 rounded-full p-3'>
                            <Image src={teacher} alt='...' width={100} height={100} />
                        </div>
                        <p className='font-bold text-[20px]'>مدرس</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}