'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DivAbout({img , titel , color ,revers , translateX}){
    return(
        <div className={`h-[600px] ${revers} bg-white flex items-center justify-between px-20 max-lg:px-2 max-md:flex-col max-md:py-10 max-md:h-[800px] max-md:justify-center max-md:gap-10 overflow-hidden`}>
            <Image src={img} alt='...' className='w-[500px] max-lg:w-[400px]'/>
            <motion.div 
                initial={{ opacity: 0, translateX: translateX }}
                whileInView={{ opacity: 1, translateX: "0px" }}
                transition={{ duration: 1 }}
                className='w-[400px] max-sm:w-[320px] flex flex-col gap-6'>
                <h2 className={`text-[55px] text-${color} max-lg:text-[50px] px-6`}>{titel}</h2>
                <p className='font-bold px-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .</p>
            </motion.div>
        </div>
    )
}