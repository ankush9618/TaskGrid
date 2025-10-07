"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'

function UserProvider({ children }) {
    const [user, setUser] = useState("");
    const [userExists, setUserExists] = useState(false);
    useEffect(() => {
        const userName = localStorage.getItem("taskGridUserName");
        //const userDetails = localStorage.getItem("taskGridUserName");Commented
        setUser(userName || "");
        setUserExists(userName ? true : false);
    }, []);
    return (
        <UserContext.Provider value={{user,setUser,userExists,setUserExists}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider