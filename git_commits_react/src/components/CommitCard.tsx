import React, { useState } from 'react';
import { Commit } from '../types/Commit';


const CommitCard: React.FC<Commit> = ({ sha, message, authorName, authorEmail, id }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`p-4 w-4/5 cursor-pointer rounded-lg shadow-md flex flex-col mb-4 transition-all duration-300 
                        ${isHovered ? 'bg-gray-100' : 'bg-gradient-to-b from-transparent to-gray-100'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center space-x-4 mb-2">
                <div className="flex-shrink-0 text-gray-600">{sha.substring(0, 7)}</div>
                <div className="text-gray-700 flex-grow">{message}</div>
            </div>
            <div className="text-sm text-gray-500">
                <div>{authorName}</div>
                <div>{authorEmail}</div>
               
            </div>
        </div>
    );
};

export default CommitCard