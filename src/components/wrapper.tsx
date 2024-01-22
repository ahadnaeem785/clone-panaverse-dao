import React from 'react'

export default function Wrapper({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className='max-w-screen-xl px-4 mx-auto'>
      {children}
    </div>
  )
}
