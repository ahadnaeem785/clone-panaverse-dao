import React from 'react'
import Wrapper from '../wrapper'
import Image from 'next/image'
import hero from "/public/assets/heroimg.png"
import Button from '../button'

const heroText = `A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet \n
Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies`

export default function Hero() {
    return (
        <section className='mb-[100px]'>
            <Wrapper>
                <div className='flex gap-8 items-center flex-col lg:flex-row'>
                    {/* content */}
                    <div className='flex-1 '>
                        <div className='max-w-xl'>
                            <h4 className='text-base font-semibold text-[#00616C]'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                            <h1 className='lg:text-5xl text-4xl font-bold text-gray-900 mt-4'>Certified Web 3.0 and Metaverse Developer</h1>
                            <p className='text-base mt-4 font-medium text-gray-600 whitespace-pre-line'>{heroText}</p>
                        </div>
                        <div className='mt-4'>
                            <Button text='Learn More'/>
                        </div>
                    </div>
                    {/* image */}
                    <div className='flex-1'>
                        <Image src={hero} alt='image' />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
