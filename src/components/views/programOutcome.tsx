import Image from "next/image"
import Wrapper from "../wrapper"
import girlimg from "/public/assets/Left.png"
import check from "/public/assets/check.png"

const programtext = `As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistans software exports.`
const points = ["Product Ownership", "Freelacing", "Global Marketing by DAO", "Boosting Economy."]
export default function ProgramOutcome() {
    return (
        <section className="mt-[130px] mb-[50px]">
            <Wrapper>
                <div className="flex gap-8 items-center flex-col-reverse lg:flex-row">
                    {/* left image */}
                    <div className="flex-1">
                        <Image src={girlimg} alt="image" />
                    </div>
                    {/* right content */}
                    <div className="flex-1 ">
                        <h2 className='text-4xl font-bold '>The Outcome for Participants of the Program</h2>
                        <h4 className='text-base mt-3 font-medium text-gray-600 '>{programtext}</h4>
                        <div className="mt-6 grid grid-cols-2 gap-y-6">
                            {
                                points.map((item,i)=>(
                                    <div key={i} className="flex items-center gap-x-3">
                                        <Image src={check} alt="icon"/> <p className="font-medium text-lg">{item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Wrapper>
            {/* border */}
            <div className="mt-36 ">
                <p className="border-b"></p>
            </div>
        </section>
    )
}
