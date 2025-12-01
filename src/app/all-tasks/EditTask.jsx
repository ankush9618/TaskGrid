"use client"
import UserContext from '@/context/userContext/UserContext';
import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { FaRegEdit } from "react-icons/fa";

function EditTask() {
    // let { user, userExists, setUser, setUserExists } = useContext(UserContext);

    const handleClick = () => {
        if (user.trim().length >= 3) {
            //localStorage.setItem("taskGridUserName", user);
            //setUserExists(true);
            toast.success("TaskGrid got you! 😎");
            document.body.style.overflow = "auto";
        } else {
            toast.error("Something went wrong!");
        }
    }
    useEffect(() => {
        //const userDetails = localStorage.getItem("taskGridUserName");Commented
        document.body.style.overflow = "hidden"; // disable background scroll
        return () => {
            document.body.style.overflow = "auto"; // re-enable on unmount
        };
    }, []);
    // if(userExists) return null;
    return (
        <div className='w-screen h-screen bg-zinc-800/80 backdrop-blur-xs flex justify-center items-center fixed top-0 left-0 user-popup-parent z-500 inset-0'>
            <div className='w-120 h-auto bg-gray-900 flex justify-center items-center rounded-xl shadow-md shadow-zinc-700 text-center p-5'>
                <div>
                    <h3 className='text-center text-xl flex justify-center items-center gap-2'>Edit Task <FaRegEdit /></h3>
                    <div className='mt-5 text-start taskDetail'>
                        <label htmlFor="taskDetail">Task Detail:</label>
                        <input type="text" name="taskDetail" id="taskDetail" className='w-full border-2 border-gray-400 focus:border-yellow-50 outline-0 py-1 px-2 rounded-md user-name' placeholder='Enter Your Nick Name..' onChange={(e) => setUser(e.target.value)} autoComplete='off' />
                    </div>
                    <div className='mt-3 text-start taskDescription'>
                        <label htmlFor="taskDescription">Task Description:</label>
                        <input type="text" name="taskDescription" id="taskDescription" className='w-full border-2 border-gray-400 focus:border-yellow-50 outline-0 py-1 px-2 rounded-md user-name' placeholder='Enter Your Nick Name..' onChange={(e) => setUser(e.target.value)} autoComplete='off' />
                    </div>
                    <button className="px-5 py-1 rounded-md duration-700 bg-blue-500 cursor-pointer hover:scale-110" onClick={handleClick}>Save me</button>
                </div>
            </div>
        </div>
    )
}

export default EditTask