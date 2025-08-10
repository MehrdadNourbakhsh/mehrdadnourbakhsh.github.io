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

            <div className='w-full mt-12 grid lg:grid-cols-3 grid-cols-1 gap-4'>
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-800 min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        No shirt, no shoes, no weapons.
                    </h2>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-zinc-800">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    No shirt, no shoes, no weapons.
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    If someone yells “stop!”, goes limp, or taps out, the fight is over.
                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-zinc-800">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    No shirt, no shoes, no weapons.
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    If someone yells “stop!”, goes limp, or taps out, the fight is over.
                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-zinc-800">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    No shirt, no shoes, no weapons.
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    If someone yells “stop!”, goes limp, or taps out, the fight is over.
                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-zinc-800">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    No shirt, no shoes, no weapons.
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    If someone yells “stop!”, goes limp, or taps out, the fight is over.
                    </p>
                </WobbleCard>
            </div>
        </div>

    )
}

export default Research