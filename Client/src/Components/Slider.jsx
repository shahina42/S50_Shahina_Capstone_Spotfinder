import React from 'react'
import Review from './ReviewData'

function Slider() {
  return (
    <>
    
    <div className='pt-11 ml-12'>
        {
            ReviewData.map((data)=>{
                <div className=' flex   absolute border w-full border-black'>
<div className='h-32 w-32 bg-white border-2 ml-24 border-[#FFBC0E] rounded-full'><img src={data.image} alt="ReviewData Image" /></div>
<div className='h-96  w-80 bg-white rounded-2xl border-2  border-[#FFBC0E] '>{data.content}</div>

</div>
            })
        }
    
</div>
 

    
    </>
  )
}

export default Slider

