"use client"
import UserDetails from '@/components/UserDetails';
import UserContext from '@/context/userContext/UserContext'
import { redirect, useRouter } from 'next/navigation'
import React, { useContext, useId, useState } from 'react';
import "./add-task.css"
import TaskContext from '@/context/taskContext/TaskContext';
import { toast, ToastContainer } from 'react-toastify';

function page() {
  const { userExists } = useContext(UserContext);
  let { tasks, setTasks } = useContext(TaskContext);
  const [taskDetails, setTaskDetails] = useState({
    id: "",
    task: "",
    description: "",
    eta: "",
    priority: "",
    isCompleted: "",
    created: "",
    updated: ""
  });

  const handleChange = (e) => {
    //console.log(e.target.name)
    const { name, value } = e.target;
    setTaskDetails((prev) => {
      return { ...prev, [name]: value }
    })
    //console.log(taskDeatils)
  }
  //const { date, setDate } = useState(new Date().toDateString())
  const router = useRouter();
  const formSubmit = (e) => {
    e.preventDefault()
    taskDetails.created = new Date().getTime();
    taskDetails.updated = new Date().getTime();
    taskDetails.id = Math.floor(Math.random()*900000);
    taskDetails.isCompleted = false;
    //console.log(taskDeatils)
    if (!taskDetails.task || !taskDetails.description || !taskDetails.eta || !taskDetails.priority) {
      toast.error("Please fill all the required details");
      return;
    }
    setTasks((prev) => [...prev, taskDetails]);
    toast.success("Task Created Successfully..");
    setTaskDetails({
      id: "",
      task: "",
      description: "",
      eta: "",
      priority: "",
      isCompleted:"",
      created: "",
      updated: ""
    })
  }
  if (!userExists) return <UserDetails />
  return (
    <div className='h-auto w-7/10 border-2 mx-auto p-5 bg-transparent rounded-xl outline-0 text-center shadow-md shadow-gray-600'>
      <h2 className='text-center text-2xl mb-5 text-yellow-200'>Create New Task</h2>
      <div className='w-9/10 mx-auto'>
        <form action="" onSubmit={formSubmit}>
          {/* Form For Task Details */}
          {/* Task Detail */}
          <label htmlFor="task" className='block text-start mb-2 text-xl'>Task detail <span className='text-red-500'>*</span></label>
          <input type='text' name="task" id="task" className='block border-2 px-5 py-3 w-full rounded-md mb-5 bg-zinc-900 outline-0 focus:border-yellow-300 overflow-visible' placeholder='Enter task details...' onChange={handleChange} value={taskDetails.task} />

          {/* Description */}
          <label htmlFor="description" className='block text-start mb-2 text-xl'>Task description</label>
          <textarea name="description" id="description" className='block border-2 px-5 py-3 w-full rounded-md mb-5 bg-zinc-900 outline-0 focus:border-yellow-300 overflow-visible' placeholder='Enter task description...' rows="6" onChange={handleChange} value={taskDetails.description} />

          {/* ETA and Priority */}
          <div className='flex justify-start xl:gap-16 gap-8'>

            {/* ETA */}
            <div className=''>
              <label htmlFor="eta" className='block text-start mb-2 text-xl'>Select ETA <span className='text-red-500'>*</span></label>
              <input type="datetime-local" name="eta" id="eta" className='text-white border-2 px-3 py-2 rounded-md bg-zinc-900 focus:border-yellow-300' onChange={handleChange} value={taskDetails.eta} />
            </div>

            {/* Priority */}
            <div className='text-start'>
              <label htmlFor="priority" className='block text-xl'>Select Priority <span className='text-red-500'>*</span></label>
              <select name="priority" id="priority" className=' border-2 px-3 py-2.5 rounded-md block bg-zinc-900 mt-2 focus:border-yellow-300 outline-0 cursor-pointer' onChange={handleChange} value={taskDetails.priority}>
                <option value="" className='hidden'>Select Priority level</option>
                <option value="1" className='bg-zinc-700'>P1</option>
                <option value="2" className='bg-zinc-700'>P2</option>
                <option value="3" className='bg-zinc-700'>P3</option>
                <option value="4" className='bg-zinc-700'>P4</option>
                <option value="5" className='bg-zinc-700'>P5</option>
              </select>
            </div>
          </div>

          <button className='block bg-blue-600 hover:bg-blue-700 px-10 py-3 rounded-3xl  mx-auto mt-5 hover:scale-105 duration-500 cursor-pointer'>Submit</button>
        </form>
      </div>
      {/* <ToastContainer/> */}
    </div>
  )
}

export default page