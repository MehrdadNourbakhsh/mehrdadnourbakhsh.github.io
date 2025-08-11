import React from 'react'
import Image from 'next/image'
import { GlowingEffect } from './ui/glowing-effect'
import { AnimatedTooltip } from './ui/animated-tooltip'

const About = () => {
    return (

        <div id='about' className='w-full px-[12%] pt-6 pb-24 scroll-mt-20'>

            {/* <h4 className='text-center mb-2 text-lg'>Intro</h4> */}
            <h2 className='text-center text-5xl'>About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-2xl max-w-none'>
                    <Image src='/globe.svg' alt='' width={50} height={50} className='rounded-3xl w-full'/>
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        <li className=''>
                            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                                <GlowingEffect
                                blur={0}
                                borderWidth={3}
                                spread={80}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                />
                                <h3>Education</h3>
                                <p>University of Tehran</p>
                            </div>
                        </li>
                        <li>
                        <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                                <GlowingEffect
                                blur={0}
                                borderWidth={3}
                                spread={80}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                />
                                <h3>Education</h3>
                                <p>University of Tehran</p>
                            </div>
                        </li>
                        <li>
                        <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                                <GlowingEffect
                                blur={0}
                                borderWidth={3}
                                spread={80}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                />
                                <h3>Education</h3>
                                <p>University of Tehran</p>
                            </div>
                        </li>
                    </ul>
                    <div className="relative flex flex-row mt-10 mb-10 w-full">
                        <AnimatedTooltip items={people} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];