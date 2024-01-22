
export default function CoreBox({quarter,Qdetail,spanNum,borderClass=true}:{quarter:string,Qdetail:string,spanNum:number,borderClass?:boolean}) {
  return (
    <div className={` flex-1 py-[70px] px-5 relative ${borderClass && "border"}`}>
    <h4 className='text-sm font-bold '>{quarter}</h4>
    <p className='text-[15px] mt-2 font-medium text-gray-600'>{Qdetail}</p>
    <span className='absolute top-[26px] right-12 text-gray-200 -z-10 font-extrabold text-9xl'>{spanNum}</span>
</div>
  )
}
