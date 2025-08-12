import React from 'react'

import { FlipWords } from './ui/flip-words'
import { WobbleCard } from './ui/wobble-card'

const Research = () => {
    return (

        <div id='research' className='w-full px-[12%] py-16  scroll-mt-20'>
            <h2 className='text-center text-6xl'>
                My
                <FlipWords
                    words={["research", "teaching",]}
                    className='font-outfit'
                    duration={2000}
                />
                experience
            </h2>

            <div className='w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-1 h-full bg-zinc-800 min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                            <h3 className="text-lg">Graduate Researcher</h3>
                            <h4 className="text-sm text-gray-500">University of Tehran, Iran</h4>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">
                            Sep 2022 – Sep 2024
                        </div>
                    </div>
                    <p className='text-justify'>
                        Researched security threats in federated learning (FL) and created a GNN-based anomaly detection framework to defend against backdoor attacks in FL. Achieved lower attack success rates while keeping model accuracy high.
                    </p>
                    
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-zinc-800">
                    <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col">
                                <h3 className="text-lg">Graduate Researcher</h3>
                                <h4 className="text-sm text-gray-500">University of Alberta, Canada (Remote)</h4>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">
                                Mar 2025 – Sep 2025
                            </div>
                    </div>
                    <p className='text-justify'>
                        Researched GNN approaches for fraud and anomaly detection in financial networks, identified key gaps, and helped design and prototype methods for classifying suspicious transactions.
                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-zinc-800">
                    <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col">
                                    <h3 className="text-lg">Undergraduate Researcher</h3>
                                    <h4 className="text-sm text-gray-500">University of Tehran, Iran</h4>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500">
                                    July 2020 – March 2021
                                </div>
                    </div>
                    <p className='text-justify'>
                            Developed and simulated embedded systems in Simulink using the Model-Based Design approach. Built and tested controllers with HIL, SIL, and MIL evaluations, and created virtual environments for cyber-physical system simulation.
                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-zinc-800">
                    <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col">
                                    <h3 className="text-lg">Teaching Assistant</h3>
                                    <h4 className="text-sm text-gray-500">University of Tehran, Iran</h4>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500">
                                    2020 – 2024
                                </div>
                    </div>
                    <p className=''>
                        <ul>
                            <li>
                                Deep Neural Networks - Dr. Ahmad Kalhor
                            </li>
                            <li>Statistical Inference - Dr. Behnam Bahrak</li>
                            <li>Real-Time Embedded Systems - Dr. Mehdi Kargahi</li>
                        </ul>
                    </p>
                </WobbleCard>
            </div>
        </div>

    )
}

export default Research