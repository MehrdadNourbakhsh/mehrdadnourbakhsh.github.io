import React from 'react'
import Image from 'next/image'
import { GlowingEffect } from './ui/glowing-effect'

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
                </div>
            </div>
        </div>
    )
}

export default About