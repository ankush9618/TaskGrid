import Link from 'next/link';
import React from 'react'
import { FaTasks } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";

function SideMenuBar() {
    return (
        <div className='w-full h-full p-5'>
            <Link href="/"><div className='flex justify-center items-center text-2xl gap-2 font-bold'>
                <FaTasks className='text-red-500 text-3xl' />
                <h1 className='text-yellow-500'>TaskGrid</h1>
            </div></Link>
            <Link href='/add-task'><div className=' bg-blue-600 duration-500 py-2 my-5 rounded-md text-center flex justify-center items-center gap-1 font-bold cursor-pointer hover:bg-blue-700 hover:scale-102'>
                <MdOutlineAdd className='text-2xl' /><p>Add Task</p>
            </div></Link>

            <section className=' text-start flex flex-col gap-4'>

                <div>
                    All Tasks
                </div>
                <div>
                    Priority Tasks
                </div>
            </section>
        </div>
    )
}
export default SideMenuBar