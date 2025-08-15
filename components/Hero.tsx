"use client";
import React from 'react'

import { NavbarDemo } from "@/components/Navbar";
import { FaRegFilePdf } from 'react-icons/fa6'

import { motion } from 'motion/react';


const Hero = () => {
    return (
        <div>
            <NavbarDemo/>
            <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center
            justify-center gap-3 dark:bg-neutral-900'>
                
                <h1 className='text-2xl sm:text-6xl lg:text-[66px] mt-4'>
                {"Mehrdad Nourbakhsh"
                    .split(" ")
                    .map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: "easeInOut",
                        }}
                        className="mr-2 inline-block"
                    >
                        {word}
                    </motion.span>
                ))}
                </h1>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
                    >
                        MSc Graduate @ University of Tehran
                </motion.p>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                    >
                        <button 
                            className="flex items-center cursor-pointer justify-center gap-2 w-40 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                            onClick={() => window.open('Mehrdad_Nourbakhsh_Resume.pdf', '_blank', 'noopener,noreferrer')}
                            >
                            <FaRegFilePdf className="text-lg" />
                            My resume
                        </button>
                </motion.div>
                
            </div>
            
            
        </div>

    )
}

export default Hero