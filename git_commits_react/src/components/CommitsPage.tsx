import React, { useState } from 'react';
import CommitCard from './CommitCard';
import { useFetchData } from '../utils/githubConnect';
import { Commit } from '../types/Commit';

const CommitsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5; // Number of items per page

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
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
 

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading commits</div>;

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col items-center space-y-4">
      {data.hits.map((hit: Commit) => (
          <CommitCard 
            key={hit.id} 
            sha={hit.sha} 
            message={hit.message} 
            authorName={hit.authorName} 
            authorEmail={hit.authorEmail}
            id={hit.id}
          />
        ))}
        <div className="d-flex">
          <button onClick={handlePrevious} className="m-4 px-4 py-2 bg-blue-500 text-white rounded">
            Previous
          </button>
          <button onClick={handleNext} className="m-4 px-4 py-2 bg-blue-500 text-white rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommitsPage;