import React from 'react';
import { MdDelete } from "react-icons/md";

function TaskCard({task,idx,setActiveCard,handleDelete}) {
  return (
    <div className='text-white text-base 2xl:min-w-50 border-2 py-3 px-5 mb-5 rounded-md font-normal max-w-60' draggable onDragStart={()=>setActiveCard(idx)} onDragEnd={()=>setActiveCard(null)}>
        <h3 className='2xl:text-xl '>{task.task}</h3>
        <p className='opacity-70'>{task.description}</p>
        <div className='flex justify-between'>
          <p className='text-sm opacity-50'><span className='font-bold'>Due:</span> {new Date(task.eta).toDateString()}</p>
          <MdDelete onClick={()=>handleDelete(task.id)} className='cursor-pointer'/>
        </div>

    </div>
  )
}

export default TaskCard