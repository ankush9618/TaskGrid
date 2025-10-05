"use client";
import UserContext from "@/context/UserContext";
import React, { useContext, useEffect, useState } from "react";

function Header() {
  const {user} = useContext(UserContext)
  const [time,setTime] = useState("Morning")
  useEffect(() => {
    const currentTime = new Date().getHours();
    if(currentTime<=12){
        setTime("morning");
    }else if(currentTime<=16){
        setTime("afternoon")
    }else{
        setTime("evening")
    }
  }, []);

  return (
    <div className="w-full h-10 items-center text-white font-medium text-end justify-end text-xl sticky top-0 z-20 py-5">
      <div className="mr-5">Hey <span className="text-yellow-500">{user.length>=3 && user}!</span> Wishing you a great {time} 😊</div>
    </div>
  );
}

export default Header;
