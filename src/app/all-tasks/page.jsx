"use client"
import DragArea from '@/components/drag-area/DragArea';
import TaskCard from '@/components/TaskCard';
import TaskContext from '@/context/taskContext/TaskContext'
import React, { useContext, useState } from 'react'

function page() {
  const { tasks } = useContext(TaskContext);
  const [activecard, setActiveCard] = useState(null);
  return (
    <div>
      <div>
        <h2 className='text-3xl text-yellow-500 underline mb-10'>All Tasks{activecard}</h2>
        <div className='flex justify-center gap-8 font-bold'>
          <section className="prirority1 text-2xl text-red-500">
            Prirority - P1
            <div className='mt-5'>
              <DragArea/>
              {
                tasks && tasks.map((task, idx) => {
                  return (
                    task.priority == "1" &&
                    <div key={task.id}>
                      <TaskCard  idx={idx} task={task} priority="p1" setActiveCard={setActiveCard} />
                      <DragArea/>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section className="prirority2 text-2xl text-red-300">
            Prirority - P2
            <div className='mt-5'>
              <DragArea/>
              {
                tasks && tasks.map((task, idx) => {
                  return (
                    task.priority == "2" &&
                    <div key={task.id}>
                      <TaskCard  idx={idx} task={task} priority="p2" setActiveCard={setActiveCard} />
                      <DragArea/>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section className="prirority3 text-2xl text-yellow-300">
            Prirority - P3
            <div className='mt-5'>
              <DragArea/>
              {
                tasks && tasks.map((task, idx) => {
                  return (
                    task.priority == "3" &&
                    <div key={task.id}>
                      <TaskCard  idx={idx} task={task} priority="p3" setActiveCard={setActiveCard} />
                      <DragArea/>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section className="prirority4 text-2xl text-green-300">
            Prirority - P4
            <div className='mt-5'>
              <DragArea/>
              {
                tasks && tasks.map((task, idx) => {
                  return (
                    task.priority == "4" &&
                    <div key={task.id}>
                      <TaskCard  idx={idx} task={task} priority="p4" setActiveCard={setActiveCard} />
                      <DragArea/>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section className="prirority5 text-2xl text-green-500">
            Prirority - P5
            <div className='mt-5'>
              <DragArea/>
              {
                tasks && tasks.map((task, idx) => {
                  return (
                    task.priority == "5" &&
                    <div key={task.id}>
                      <TaskCard  idx={idx} task={task} priority="p5" setActiveCard={setActiveCard} />
                      <DragArea/>
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