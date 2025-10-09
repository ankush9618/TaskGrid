import ReactQuill from '@/components/ReactQuillComp'
import React from 'react'

function page() {
  return (
    <div>
        <div className='ml-5  pl-5 pr-10 py-2 border-1 w-fit rounded-t-2xl border-b-0 text-yellow-300'>Note Book 1</div>
        <ReactQuill/>
    </div>
  )
}

export default page