"use client"
import DragArea from '@/components/drag-area/DragArea';
import TaskCard from '@/components/TaskCard';
import TaskContext from '@/context/taskContext/TaskContext'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import EditTask from './EditTask';

function page() {
  const { tasks,setTasks } = useContext(TaskContext);
  const [activecard, setActiveCard] = useState(null);
  const onDrop = (priority,idx) =>{
    //console.log(`${activecard} is moving to ${priority} at ${idx} `);
    if(activecard==null || activecard==undefined) return;
    const taskToMove = tasks[activecard];
    //console.log(taskToMove)
    let updatedTask = tasks.filter((task,index)=>task.id!=taskToMove.id);
    updatedTask.splice(idx,0,{...taskToMove,priority:priority});
    setTasks(updatedTask)
  }

  const handleDelete = (id)=>{
    if(!id) return;
    let updatedTask = tasks.filter((task)=>task.id!=id);
    setTasks(updatedTask);
    toast.error("Task Deleted Successfully.")
  }
  return (
    <div>
      {/* <EditTask/> */}
      <div>
        <h2 className='text-3xl text-yellow-500 underline mb-10'>All Tasks</h2>
        <div className='flex justify-center gap-8 font-bold'>
          <section className="prirority1 text-2xl text-red-500">
            Prirority - P1
            <div className='mt-5'>
              <DragArea onDrop={()=>onDrop(1,0)}/>
              {
                tasks && tasks.map((task, idx) => {
                  return (
                    task.priority == "1" &&
                    <div key={task.id}>
                      <TaskCard  idx={idx} task={task} priority="p1" setActiveCard={setActiveCard} handleDelete={handleDelete}/>
                      <DragArea onDrop={()=>onDrop(task.priority,idx+1)}/>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section className="prirority2 text-2xl text-red-300">
            Prirority - P2
            <div className='mt-5'>
              <DragArea onDrop={()=>onDrop(2,0)}/>
              {
                tasks && tasks.map((task, idx) => {
                  return (
                    task.priority == "2" &&
                    <div key={task.id}>
                      <TaskCard  idx={idx} task={task} priority="p2" setActiveCard={setActiveCard} handleDelete={handleDelete}/>
                      <DragArea onDrop={()=>onDrop(task.priority,idx+1)}/>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section className="prirority3 text-2xl text-yellow-300">
            Prirority - P3
            <div className='mt-5'>
              <DragArea onDrop={()=>onDrop(3,0)}/>
              {
                tasks && tasks.map((task, idx) => {
                  return (
                    task.priority == "3" &&
                    <div key={task.id}>
                      <TaskCard  idx={idx} task={task} priority="p3" setActiveCard={setActiveCard} handleDelete={handleDelete}/>
                      <DragArea onDrop={()=>onDrop(task.priority,idx+1)}/>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section className="prirority4 text-2xl text-green-300">
            Prirority - P4
            <div className='mt-5'>
              <DragArea onDrop={()=>onDrop(4,0)}/>
              {
                tasks && tasks.map((task, idx) => {
                  return (
                    task.priority == "4" &&
                    <div key={task.id}>
                      <TaskCard  idx={idx} task={task} priority="p4" setActiveCard={setActiveCard} handleDelete={handleDelete}/>
                      <DragArea onDrop={()=>onDrop(task.priority,idx+1)}/>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section className="prirority5 text-2xl text-green-500">
            Prirority - P5
            <div className='mt-5'>
              <DragArea onDrop={()=>onDrop(5,0)}/>
              {
                tasks && tasks.map((task, idx) => {
                  return (
                    task.priority == "5" &&
                    <div key={task.id}>
                      <TaskCard  idx={idx} task={task} priority="p5" setActiveCard={setActiveCard} handleDelete={handleDelete}/>
                      <DragArea onDrop={()=>onDrop(task.priority,idx+1)}/>
                    </div>
                  )
                })
              }
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page