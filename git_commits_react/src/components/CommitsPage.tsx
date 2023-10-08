import { Commit } from "../types/Commit";
import { useFetchData } from "../utils/githubConnect";
import CommitCard from "./CommitCard";

const CommitsPage = () => {
    const { data, isLoading, isError } = useFetchData({
      url: 'http://localhost:3000/search',
      queryKey: 'commits',
      queryParams: {
        index: 'commits',
        query: '',
        page: 1,
        limit: 5,
      },
    });
  
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading commits</p>;
  
    const hits = data?.hits || []; // Replace 'hits' with the actual key in your API response if different
  
    return (
      <div className="p-4 space-y-4">
        <div className="flex flex-col items-center space-y-4">
          {hits.map((hit: Commit) => (
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
            <button className="m-4 px-4 py-2 bg-blue-500 text-white rounded">
              Previous
            </button>
            <button className="m-4 px-4 py-2 bg-blue-500 text-white rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CommitsPage;