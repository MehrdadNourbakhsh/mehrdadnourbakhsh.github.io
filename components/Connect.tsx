"use client";
import React from 'react'
import { Modal,ModalTrigger,ModalBody,ModalContent } from './ui/animated-modal'
import { motion } from 'motion/react'
import { MdEmail } from "react-icons/md"

// import Image from 'next/image'

const Connect = () => {

    return (
        
        <div id='connect' className='w-full px-[12%] py-16  scroll-mt-20'>
            <h2 className='text-center text-6xl'>
                Connect
            </h2>
            {/* <div className="py-40 flex items-center justify-center"> */}
                {/* <Modal>
                    <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Book your flight
                        </span>
                        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        ✈️
                        </div>
                    </ModalTrigger>
                    <ModalBody className='dark:bg-zinc-800'>
                        <ModalContent> */}
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
                                
                                <img
                                    src={image.image}
                                    alt=""
                                    width="50"
                                    height="50"
                                    className="object-cover shrink-0 gap-4"
                                />
                                </motion.div>
                            ))}
                        </div>
                        {/* </ModalContent>
                    </ModalBody>
                </Modal> */}
            {/* </div> */}
        </div>
    )
}

export default Connect


const images = [
    {
        url: 'https:github.com',
        image: '/github.svg'
    },
    {
        url: 'https:goodreads.com',
        image: '/goodreads.svg'
    },
    {
        url: 'https:linkedin.com',
        image: '/linkedin.svg'
    },
    {
        url: 'https:telegram.org',
        image: '/telegram.svg'
    },
    
]