import React from 'react'
import { Spotlight } from './ui/spotlight'
import Image from 'next/image'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'


import { NavbarDemo } from "@/components/Navbar";
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <>
            {/* <div className='relative top-0 right-0'> */}
            {/* <Spotlight className="top-0 left-0 md:-left-32 md:-top-20 h-screen" fill="purple"/>
            <Spotlight className="h-[80vh] top-10 left-200" fill="blue"/> */}
            <Spotlight className="left-150 top-28 h-[80vh] w-[50vw] md:left-120 md:top-28 " fill="white" />
            {/* </div> */}
            <NavbarDemo/>
            <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center
            justify-center gap-3'>

                <div>
                    <Image src='/globe.svg' alt='' width={50} height={50} className='rounded-full w-32'/>
                </div>
                <h3 className='flex item-end gap-2 text-x md:text-2xl mb-3'>
                    <TextGenerateEffect
                            words="Mehrdad Nourbakhsh"
                            className="text-center text-[40px] md:text-5xl lg:text-6xl font-Ovo"
                    />
                </h3>
                <h1 className='text-2xl sm:text-6xl lg:text-[66px]'>
                    Master Student
                </h1>
                <p className='max-w-2xl mx-auto'>
                    Tehran
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <MagicButton otherClasses='px-10 py-3' 
                        title="My resume"
                        icon={<FaLocationArrow/>}
                        position='left'
                    />
                </div>
            </div>
            
        </>
        // <div className='pb-20 pt-36'>
        //     <div>
        //         <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        //         <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        //         <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        //     </div>
        //     <IconMenur2/>
        //     {/* <div className="h-screen w-full dark:bg-neutral-900 bg-white dark:bg-grid-white/[0.2] bg-grid-black-100/[0.2]
        //     absolute top-0 left-0 flex items-center justify-center"
        //     >
        //         <div
        //     className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-900
        //     bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        //     />
        //     </div>
        //     <div className="flex justify-center relative my-20 z-10">
        //         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        //             <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
        //                 Mehrdad Nourbakhsh
        //             </p>

        //             <TextGenerateEffect
        //                 words="Mehrdad Nourbakhsh"
        //                 className="text-center text-[40px] md:text-5xl lg:text-6xl"
        //             />
        //             <MagicButton 
        //                 title="My resume"
        //                 icon={<FaLocationArrow/>}
        //                 position='left'
        //             />

        //         </div>
        //     </div> */}

    )
}

export default Hero