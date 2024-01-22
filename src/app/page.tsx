import Header from '@/components/layouts/header'
import CoreText from '@/components/views/coreText'
import Hero from '@/components/views/hero'
import ProgramOutcome from '@/components/views/programOutcome'
import SpecializedTracks from '@/components/views/specializedTracks'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero/>
      <CoreText/>
      <SpecializedTracks/>
      <ProgramOutcome/>
    </main>
  )
}
