import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Dashboard: React.FC = () => {
    const [username, setUsername] = useState<string>("");

    const location = useLocation();

    useEffect(()=>{
        if(location.state && location.state.username){
            setUsername(location.state.username)
        }
    }, [location.state, username])

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{username}</p>
        </div>
    )
}