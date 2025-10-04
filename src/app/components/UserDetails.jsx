"use client"
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

function UserDetails() {
    const [user,setUser] = useState("");
    const [userExists,setUserExists] = useState(false);
    useEffect(() => {
        const userName = localStorage.getItem("taskGridUserName");
        //const userDetails = localStorage.getItem("taskGridUserName");Commented
        setUser(userName || "");
        setUserExists(userName?true:false);
        document.body.style.overflow = "hidden"; // disable background scroll
    return () => {
      document.body.style.overflow = "auto"; // re-enable on unmount
    };
  }, []);

  const handleClick = ()=>{
    if(user.trim().length>=3){
        localStorage.setItem("taskGridUserName",user);
        setUserExists(true);
        toast.success("TaskGrid got you! 😎");
        document.body.style.overflow = "auto"; 
    }else{
        toast.error("Something went wrong!");
    }

  }
  if(userExists) return null;
  return (
    <div className='w-screen h-screen bg-zinc-800/80 flex justify-center items-center fixed top-0 left-0 user-popup-parent'>
        <div className='w-80 h-50 bg-zinc-900 flex justify-center items-center rounded-xl shadow-md shadow-zinc-700 text-center p-5'>
            <div>
                <h3 className='text-center text-yellow-500 text-xl'>Hey Buddy👋!</h3>
                <input type="text" name="userName" id="userName" className='w-full my-5 border-2 border-white outline-0 py-1 px-2 rounded-md user-name' placeholder='Enter Your Nick Name..' onChange={(e)=>setUser(e.target.value)}/>
                <button className={` px-5 py-1 rounded-md ${user.length<3 ? "bg-gray-400":"bg-blue-500 cursor-pointer"}`} disabled={user.length < 3}
                onClick={handleClick}>Save me</button>
            </div>
        </div>
    </div>
  )
}

export default UserDetails