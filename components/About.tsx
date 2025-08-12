import React from 'react'
import Image from 'next/image'
import { AnimatedTooltip } from './ui/animated-tooltip'

const About = () => {
    return (

        <div id='about' className='w-full px-[12%] pt-6 pb-24 scroll-mt-20'>

            {/* <h4 className='text-center mb-2 text-lg'>Intro</h4> */}
            <h2 className='text-center text-5xl'>About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-start gap-20 my-20'>
                <div className='relative w-64 sm:w-80 h-64 sm:h-80 rounded-xl overflow-hidden max-w-none'>
                    <Image src='/profile.png' alt='' fill className='rounded-3xl w-full object-cover'/>
                </div>
                <div className='flex-1'>
                    <p className='max-w-2xl text-justify'>
                        Hi! I&apos;m Mehrdad, a computer engineer and AI researcher. I&apos;m currently interested in how we can make machine learning systems more secure, private, and reliable, especially in areas like federated learning, distributed learning, and edge AI. I hold an MSc in Software Engineering from the University of Tehran, where my research focused on mitigating the impact of backdoor attacks in federated learning. Prior to that, I earned my Bachelor&apos;s in Computer Engineering at the same university.
                    </p>
                    <p className='mb-10 max-w-2xl text-justify'>
                        Outside of research, I love building software that people actually enjoy using. Whether it&apos;s experimenting with a new framework, diving into an unfamiliar programming language, or turning an idea into a working prototype, I&apos;m always exploring ways to turn technology into impactful, practical, and sometimes even fun solutions to real-world problems.
                    </p>
                    
                    <ul className='grid grid-cols-1  gap-6 max-w-2xl'>
                        <li className='col-span-1'>
                            <div className="relative p-3">
                                <h2 className='font-semibold text-center'>Education</h2>
                                <div className="flex items-center justify-between py-2">
                                    <div className="flex items-center gap-4">
                                        <Image src="/ut.svg" alt="" width={40} height={40} />
                                        <div className="flex flex-col">
                                        <h3 className="text-lg">University of Tehran</h3>
                                        <h4 className="text-sm text-gray-500">MSc - Software Engineering</h4>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        2021 – 2024
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <div className="flex items-center gap-4">
                                        <Image src="/ut.svg" alt="" width={40} height={40} />
                                        <div className="flex flex-col">
                                        <h3 className="text-lg">University of Tehran</h3>
                                        <h4 className="text-sm text-gray-500">BSc - Computer Engineering</h4>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        2015 – 2021
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='font-semibold text-center'>
                            <div className="relative p-3">
                                <h2 className='font-semibold text-center'>Tools & Technologies</h2>
                                <div className="relative justify-center flex flex-row mt-8 mb-10 w-full">
                                    <AnimatedTooltip items={toolsArray} />
                                </div>
                            </div>
                        </li>

                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default About

const toolsArray = [
    {
        id: 1,
        name: 'Python',
        image: '/python.svg'
    },
    {
        id: 2,
        name: 'Tensorflow',
        image: '/tensorflow.svg'
    },
    {
        id: 3,
        name: 'Pytorch',
        image: '/pytorch.svg'
    },
    {
        id: 4,
        name: 'Django',
        image: '/django.svg'
    },
    {
        id: 5,
        name: 'Node js',
        image: '/node-js.svg'
    },
    {
        id: 7,
        name: 'Typescript',
        image: '/typescript.svg'
    },
    {
        id: 8,
        name: 'React',
        image: '/react.svg'
    },
    {
        id: 9,
        name: 'Next js',
        image: '/next.js.svg'
    },
    {
        id: 10,
        name: 'Vue js',
        image: '/vue-js.svg'
    },
    {
        id: 11,
        name: 'Tailwind css',
        image: '/tailwind-css.svg'
    },
    {
        id: 12,
        name: 'Java',
        image: '/java.svg'
    },
    {
        id: 13,
        name: 'R',
        image: '/r-project.svg'
    },
];