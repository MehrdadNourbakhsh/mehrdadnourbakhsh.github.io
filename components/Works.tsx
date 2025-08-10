import React from 'react'
import { Button } from './ui/moving-border'
import { FaLaptopCode } from 'react-icons/fa6'
import Image from 'next/image'

const Works = () => {
    return (
        
        <div id='works' className='w-full px-[12%] py-16  scroll-mt-20'>
            <h2 className='text-center text-5xl'>My work experience</h2>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map((card) => (
                    <Button
                    key = {card.id}
                    borderRadius="1.75rem"
                    className="flex-1 bg-zinc-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    
                    >
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <Image className='lg:w-32 md:w-20 w-16'
                                src = '/developer.svg'
                                alt = ''
                                width={40} height={40}
                            />
                            <div className="lg:ms-5">
                                <h4 className='text-start text-xl md:text-xl font-outfit'>{card.title} - {card.company}</h4>
                                <p className="text-start text-white-100 mt-3 font-outfit">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
                
            </div>
            
        </div>

    )
}

const workExperience = [
    {
        id: 1,
        title: 'Software Developer',
        company: 'University of Tehran',
        desc: 'using vue',
        duration: 'fall 2024'

    },
    {
        id: 2,
        title: 'Backend developer',
        company: 'Synapps',
        desc: 'using python',
        duration: 'mar 2020'
    },
    {
        id: 3,
        title: 'Backend developer',
        company: 'Synapps',
        desc: 'using python',
        duration: 'mar 2020'
    },
    {
        id: 4,
        title: 'Backend developer',
        company: 'Synapps',
        desc: 'using python',
        duration: 'mar 2020'
    }
]

export default Works