import React from 'react'

export default function Button({text}:{text:string}) {
    return (
        <button className="text-sm font-medium bg-[#00616C] text-white px-5 py-3 rounded-full">{text}</button>
    )
}
