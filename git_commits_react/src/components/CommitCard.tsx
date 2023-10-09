import React, { useState } from 'react';
import { Commit } from '../types/Commit';


const CommitCard: React.FC<Commit> = ({ sha, message, authorName, authorEmail, id }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`  cursor-pointer rounded-lg pb-5  shadow-md flex flex-col mb-4 transition-all duration-300 
                        ${isHovered ? 'bg-gray-200' : 'bg-gradient-to-b from-transparent to-gray-100'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        ><div className="flex items-center space-x-4 m-4">
       
      
    </div>
            <div className="flex items-center space-x-4 m-4">
               
                <div className="text-gray-700 p-4 flex-grow">{message}</div>
            </div>
            <div className="text-sm text-gray-500 m-auto mt-2">
                <div>{authorName}</div>
                <div>{authorEmail}</div>
               
            </div>
        </div>
    );
};

export default CommitCard