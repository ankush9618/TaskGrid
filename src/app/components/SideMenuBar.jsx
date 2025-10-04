import React from 'react'
import { FaTasks } from "react-icons/fa";

function SideMenuBar() {
    return (
        <div className='w-full h-full p-5'>
            <div className='flex justify-center w-full items-center text-2xl gap-2 font-bold'>
                <FaTasks className='text-red-500 text-3xl' />
                <h1 className='text-yellow-500'>TaskGrid</h1></div>
                <div className='mt-10'>
                    <div>
                        Add Task
                    </div>
                </div>
        </div>
    )
}
export default SideMenuBar