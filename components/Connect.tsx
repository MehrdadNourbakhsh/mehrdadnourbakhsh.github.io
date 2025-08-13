"use client";
import React from 'react'
import { motion } from 'motion/react'
import { MdEmail } from "react-icons/md"

// import Image from 'next/image'

const Connect = () => {

    return (
        
        <div id='connect' className='w-full px-[12%] py-16  scroll-mt-20'>
            <h2 className='text-center text-6xl'>
                Connect
            </h2>
            
            <h4 className="text-lg md:text-2xl text-white text-center py-4">
                Let&apos;s get in touch!
            </h4>
            <div className="flex items-center justify-center space-x-2 py-4">
                <MdEmail className="text-white text-xl" />
                <h4 className="text-md md:text-xl text-white">
                    mehrdad.nb4@gmail.com
                </h4>
            </div>
            <div className="flex justify-center items-center mt-8">
                {images.map((image, idx) => (
                    <motion.div
                    key={"images" + idx}
                    style={{
                        rotate: Math.random() * 20 - 10,
                    }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                    }}
                    whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                    }}
                    className="overflow-hidden"
                    >
                    <a href={image.url} target='blank'>
                        <img
                            src={image.image}
                            alt=""
                            width="50"
                            height="50"
                            className="object-cover shrink-0 gap-4"
                            />
                    </a>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Connect


const images = [
    {
        url: 'https://github.com/mehrdadnourbakhsh',
        image: '/github.svg'
    },
    {
        url: 'https://www.goodreads.com/mnourbakhsh',
        image: '/goodreads.svg'
    },
    {
        url: 'https://www.linkedin.com/in/mehrdad-nourbakhsh/',
        image: '/linkedin.svg'
    },
    {
        url: 'https://t.me/MNourbakhsh75',
        image: '/telegram.svg'
    },
    
]