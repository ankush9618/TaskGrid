"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaTasks } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaNotesMedical } from "react-icons/fa";

function SideMenuBar() {
    const [notes, setNotes] = useState(false)
    const notesClick = () => {
        setNotes(true);
    }
    const addClick = () => {
        setNotes(false);
    }

    return (
        <div className='w-full h-full p-5 relative'>
            <Link href="/"><div className='flex justify-center items-center text-2xl gap-2 font-bold'>
                <FaTasks className='text-red-500 text-3xl' />
                <h1 className='text-yellow-500'>TaskGrid</h1>
            </div></Link>
            <Link href='/add-task'><div className=' bg-blue-600 duration-500 py-2 my-8 rounded-md text-center flex justify-center items-center gap-1 font-bold cursor-pointer hover:bg-blue-700 hover:scale-102' onClick={addClick}>
                <MdOutlineAdd className='text-2xl' /><p>Add Task</p>
            </div></Link>

            {!notes && <section className='task-menu-items text-start flex flex-col gap-4'>
                <Link href="/all-tasks"><div className='bg-zinc-700 duration-500 py-2 rounded-md text-center flex justify-center items-center gap-1 font-bold cursor-pointer hover:bg-zinc-600 hover:scale-102'>
                    All Tasks
                </div></Link>
                <div className='bg-zinc-700 duration-500 py-2 rounded-md text-center flex justify-center items-center gap-1 font-bold cursor-pointer hover:bg-zinc-600 hover:scale-102'>
                    Today's Tasks
                </div>
            </section>
            }
            <Link href='/notes'><div className=' bg-blue-600 duration-500 py-2 my-8 rounded-md text-center flex justify-center items-center gap-1 font-bold cursor-pointer hover:bg-blue-700 hover:scale-102' onClick={notesClick}>
                <FaNotesMedical className='text-2xl' /><p>Add Notes</p>
            </div></Link>

            <div className='absolute bottom-5 right-5 text-xl cursor-pointer'>
                <Link href="/setting"><IoSettingsOutline /></Link>
            </div>
        </div>
    )
}
export default SideMenuBar