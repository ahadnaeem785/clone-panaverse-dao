import React from 'react'
import Wrapper from '../wrapper'
import Button from '../button'
import CoreBox from '../coreBox'

const coreheading = "Core Courses \n (Common in All Specializations):"
export default function CoreText() {
    return (
        <section className='pt-6 mb-[100px]'>
            <Wrapper>
                <div className='max-w-xl'>
                    <h4 className='text-base font-semibold text-[#00616C] '>Program of Studies</h4>
                    <h1 className='text-4xl font-bold text-gray-900 mt-4 whitespace-pre-line'>{coreheading}</h1>
                    <p className='text-[18px] mt-4 font-medium text-gray-600 '>Every participant of the program will start by completing the following three core courses:</p>
                    <div className='mt-4'>
                        <Button text='Learn More' />
                    </div>
                </div>
                <div className='mt-16 flex flex-col md:flex-row gap-8' >
                    <CoreBox quarter='Quarter I' Qdetail='CS-101: Object-Oriented Programming using TypeScript' spanNum={1}/>
                    <CoreBox quarter='Quarter II' Qdetail='W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform' spanNum={2}/>
                    <CoreBox quarter='Quarter III' Qdetail='CS-101: $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development' spanNum={3}/>
                </div>
            </Wrapper>
        </section>
    )
}
