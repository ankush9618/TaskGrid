"use client";
import React, { useEffect, useState } from "react";

function Header() {
  const [userName, setUserName] = useState("");
  const [time,setTime] = useState("Morning")
  useEffect(() => {
    const storedName = localStorage.getItem("taskGridUserName");
    if (storedName) setUserName(storedName);
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
      <div className="text-yellow-0 mr-5">Hey <span className="text-yellow-500">{userName}!</span> Wishing you a great {time} 😊</div>
    </div>
  );
}

export default Header;
