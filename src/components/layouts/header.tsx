import Image from 'next/image'
import logo from "/public/assets/logo.png"
import Wrapper from '../wrapper'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='sticky top-0 bg-white z-10'>
      <Wrapper>
        <div className='flex justify-between py-6'>
          {/* image */}
          <Image src={logo} alt='image' />
          <ul className='flex gap-16 font-normal text-base mt-4 lg:text-lg'>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/cource"}><li>Cource</li></Link>
          </ul>
        </div>
      </Wrapper>
    </header>
  )
}
