import React,{useState} from "react";

export const Home: React.FC = () => {
    const[username, setUsername] = useState<string>("")
    const sendUsername = ()=> {
        alert("Username:" + username)
    }
    return (
        <div className="flex flex-col item-center">
            <h1>Home</h1>
            <div className="flex flex-row -2">
                <input type="text" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}></input>
                <p>{username}</p>
                <button onClick={sendUsername}>Enter</button>
            </div> 
        </div>
    )
}