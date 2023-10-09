import React, { useState, useEffect } from 'react';
import { useFetchData } from '../../utils/githubConnect';
import { Commit } from '../../types/Commit';
import CommitsPage from './Presentational';

const CommitsPageContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 5;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null);
  const [animationClass, setAnimationClass] = useState<string>('opacity-0');

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

  return (
    <CommitsPage
      data={data}
      isLoading={isLoading}
      isError={isError}
      currentPage={currentPage}
      isOpen={isOpen}
      selectedCommit={selectedCommit}
      animationClass={animationClass}
      handleCardClick={handleCardClick}
      handleClose={handleClose}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
    />
  );
};

export default CommitsPageContainer;
