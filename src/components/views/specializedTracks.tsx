"use client"
import React, { useState } from 'react'
import Wrapper from '../wrapper'
import CoreBox from '../coreBox'
import Image from 'next/image'
import wmd from "/public/assets/wmd.webp"
import ai from "/public/assets/ai.webp"
import cloud from "/public/assets/cloud.webp"
import amb from "/public/assets/ambient.webp"
import gen from "/public/assets/genomics.webp"
import net from "/public/assets/network.webp"

const programsData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: wmd,
        quaters: [
            {
                header: "Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps4",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences 5",
                number: 5
            },
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: ai,
        quaters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5
            },
        ]
    },
    {
        slug: "cloud",
        header: "Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes",
        image: cloud,
        quaters: [
            {
                header: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: 4
            },
            {
                header: "Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number: 5
            },
        ]
    },
    {
        slug: "amb",
        header: "Ambient Computing and IoT Specialization",
        description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        image: amb,
        quaters: [
            {
                header: "Quarter IV",
                description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AC-361: Embedded Programming using C and Rust",
                number: 5
            },
        ]
    },
    {
        slug: "gen",
        header: "Genomics and Bioinformatics Specialization",
        description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        image: gen,
        quaters: [
            {
                header: "Quarter IV",
                description: "Bio-351: Python for Biologists",
                number: 4
            },
            {
                header: "Quarter V",
                description: "Bio-361: Bioinformatics with Python",
                number: 5
            },
        ]
    },
    {
        slug: "net",
        header: "Network Programmability and Automation Specialization",
        description: "with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        image: net,
        quaters: [
            {
                header: "Quarter IV",
                description: "NPA-351: CCNA 200-301 Certification",
                number: 4
            },
            {
                header: "Quarter V",
                description: "NPA-361: Network Programmability and Automation",
                number: 5
            },
        ]
    },
    

]

export default function SpecializedTracks() {
    const [selectedItem, setSelectedItem] = useState("wmd");
    const selectedItemData = programsData.find((item) => item.slug === selectedItem);
    // console.log(selectedItemData)
    // console.log(selectedItem)
    return (
        <section className='mb-[100px]'>
            <Wrapper>
                {/* header */}
                <div className='max-w-xl'>
                    <h2 className='text-4xl font-bold '>Specialized Tracks:</h2>

                    <p className='font-normal mt-4 text-[18px] text-gray-600'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
                </div>
                <div className='mt-12 flex gap-8 gap-y-6 flex-col-reverse lg:flex-row'>
                    {/* left content */}
                    <div className=' sticky top-24 self-start py-9 px-8 border shadow-xl rounded-xl border-slate-300 basis-8/12'>
                        {/* text */}
                        <div>
                            <p className='text-sm font-semibold text-[#00616C]'>Specialized Program</p>
                            <h3 className='text-3xl mt-3  font-bold '>{selectedItemData?.header}</h3>
                            <h4 className='mt-3 font-normal text-gray-600 text-base'>{selectedItemData?.description}
                            </h4>
                            <button className='mt-3 text-lg font-semibold underline underline-offset-2 text-[#00616C]'>Learn More </button>
                        </div>
                        {/* qaurter boxes */}
                        <div className='mt-8 flex gap-8 flex-col md:flex-row '>
                            {
                                selectedItemData?.quaters.map((item, i) => (
                                    <div key={i}>
                                        <CoreBox quarter={item.header} Qdetail={item.description} spanNum={item.number} borderClass={false} />
                                    </div>
                                    
                                ))
                            }
                        </div>
                    </div>
                    {/* right content */}
                    <div className='basis-4/12 px-4 pt-2 pb-6 space-y-7 '>
                        {
                            programsData.map((item) => (
                                <div key={item.slug}>
                                    <div
                                        onClick={() => setSelectedItem(item.slug)}
                                         className='flex gap-x-3 items-center cursor-pointer'>
                                        {/* image div */}
                                        <div className='shrink-0 h-[74px] w-28'>
                                            <Image src={item.image} alt='image' className={"h-[74px]  object-cover rounded-md"} />
                                        </div>
                                        {/* content div */}
                                        <div>
                                            <h4 className='text-[13px] font-semibold text-[#00616C]'>Specialized Program</h4>
                                            <h3 className='text-[15px] font-semibold mt-1'>{item.header}</h3>
                                        </div>
                                    </div>
                                    <div className='mt-6'>
                                        <div className="bg-gray-300 h-[2px] w-[90%]"></div>
                                    </div>
                                     

                                </div>

                            ))
                        }

                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
