import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
    const[username, setUsername] = useState<string>("")
    const naviage = useNavigate();

    const sendUsername = ()=> {
        naviage("/dashboard", {state: {username: username}})
    }

    return (
        <div className="flex flex-col item-center">
            <h1>Home</h1>
            <div className="flex flex-row -2">
                <input type="text" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}></input>
                <button type="button" onClick={sendUsername}>Enter</button>
            </div> 
        </div>
    )
}