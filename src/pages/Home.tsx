import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
    const[username, setUsername] = useState<string>("")
    const navigate = useNavigate();

    const sendUsername = ()=> {
        navigate("/dashboard", {state: {username: username}})
    }

    return (
        <div className="flex flex-col">
            <h1 className="text-3xl">Github Profiler</h1>
            <div className="flex flex-row gap-2 p-10 bg-gray-300 rounded-md mt-10">
                <input type="text" className="p-2 rounded-md" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}></input>
                <button className="p-2 bg-slate-600 px-4 rounded-md text-white" type="button" onClick={sendUsername}>Enter</button>
            </div>  
        </div>
    )
}