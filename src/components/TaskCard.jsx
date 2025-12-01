import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function TaskCard({task,idx,setActiveCard,handleDelete}) {
  return (
    <div className='text-white text-base 2xl:min-w-50 border-2 py-3 px-5 mb-5 rounded-md font-normal max-w-60 cursor-move' draggable onDragStart={()=>setActiveCard(idx)} onDragEnd={()=>setActiveCard(null)}>
        <div className='relative'><h3 className='2xl:text-xl '>{task.task}</h3><div className='absolute right-[-30] top-[-20] text-xl bg-black p-1 rounded-full border-2'><FaRegEdit /></div></div>
        <p className='opacity-70'>{task.description}</p>
        <div className='flex justify-between'>
          <p className={`text-sm opacity-50 ${(new Date(task.eta).getDate())==(new Date().getDate())?"text-red-500":""}`}><span className='font-bold text-white'>Due:</span> {new Date(task.eta).toDateString()}</p>
          < MdDelete onClick={()=>handleDelete(task.id)} className='cursor-pointer'/>
        </div>

    </div>
  )
}

export default TaskCard