import React, { useState, useEffect } from 'react';
import CommitCard from './CommitCard';
import { useFetchData } from '../utils/githubConnect';
import { Commit } from '../types/Commit';
import CommitModal from './Modal';

const CommitsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 5; // Number of items per page
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null);
    const [animationClass, setAnimationClass] = useState('opacity-0');

    useEffect(() => {
        setAnimationClass('opacity-100');
    }, [currentPage]);

    const handleCardClick = (commit: Commit) => {
        setSelectedCommit(commit);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const { data, isLoading, isError } = useFetchData({
        url: 'http://localhost:3000/search',
        queryKey: 'commits',
        queryParams: {
            index: 'commits',
            query: '',
            page: currentPage,
            limit: limit,
        },
    });

    const handleNext = () => {
        setAnimationClass('opacity-0');
        setTimeout(() => {
            setCurrentPage((prevPage) => prevPage + 1);
        }, 200);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setAnimationClass('opacity-0');
            setTimeout(() => {
                setCurrentPage((prevPage) => prevPage - 1);
            }, 200);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading commits</div>;


    return (
        <div className={`p-4 space-y-4 transition-opacity ease-in-out duration-300 ${animationClass}`}>
            <div className=" text-2xl font-semibold text-gray-700 mb-4  rounded">
                GitHub Commits - Page {currentPage}
            </div>
            <div className="flex flex-col items-left space-y-4">
                {data.hits.map((hit: Commit) => (

                   <div className=' w-4/5' onClick={() => handleCardClick(hit)} key={hit.id}>
                   <CommitCard 
                     sha={hit.sha} 
                     message={hit.message} 
                     authorName={hit.authorName} 
                     authorEmail={hit.authorEmail}
                     id={hit.id}
                   />
                 </div>
                ))}
                 {isOpen && selectedCommit && <CommitModal isOpen onClose={handleClose} commit={selectedCommit} />}
              <div className="flex">
                    <button onClick={handlePrevious} className="transition-all duration-300 ease-in-out hover:bg-red-600 hover:-translate-y-1 m-4 px-4 py-2 bg-red-500 text-white rounded">
                        Previous
                    </button>
                    <button onClick={handleNext} className="transition-all duration-300 ease-in-out hover:bg-blue-600 hover:-translate-y-1 m-4 px-4 py-2 bg-blue-500 text-white rounded">
                        Next
                    </button>
                </div>
                
            </div> 
             
        </div> 
    );
};

export default CommitsPage;