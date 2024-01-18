import React from "react";

interface NameProps {
    name: string;
}

export const Name: React.FC<NameProps> = ({name}:{name:string}) => {
    return (
        <div>
            <h1>My name is: {name}</h1>
        </div>
    )
}