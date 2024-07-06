'use client'

import { motion } from "framer-motion"
import Link from "next/link"


export default function SchoolYear({ titel, number,delay}) {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: "-100px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{ duration: 1 ,delay: delay}}
            
        >
            <Link href={"#"} className='flex gap-6 flex-col'>
                <div className="text-[200px] w-[200px] h-[200px] rounded-full bg-white flex items-center justify-center text-yellow-400">{number}</div>
                <p className="text-[35px] font-bold">{titel}</p>
            </Link>
        </motion.div>
    )
}


