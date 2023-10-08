
const hits = [
    {
        "sha": "de3fc2024c382693dc882d66a4610074a10a0e68",
        "message": "Add unit tests for GithubController's getCommits method\n\n- Mock GithubService to isolate controller logic\n- Test if getCommits in GithubController calls GithubService with correct parameters and returns expected results",
        "authorName": "Francisco Escalante",
        "authorEmail": "fxev90@gmail.com",
        "id": "4879a7df-5415-4efd-a849-f4d7664bb1fb"
    },
    {
        "sha": "cd5c0440c21b9d90ce63eb67d174baf6a9d6ef0d",
        "message": "Add support for meilisearch on commit service test\n\n-Config configmodule to work with the test",
        "authorName": "Francisco Escalante",
        "authorEmail": "fxev90@gmail.com",
        "id": "9eeef938-fd55-4c59-b2f1-0467c2929d85"
    },
    {
        "sha": "3e52445deb63cedf7de85956fe28ba0bd6d64cd5",
        "message": "Implement search functionality with pagination in MeilisearchService and Controller\n\n- Add search method in MeilisearchService to handle search queries with pagination support.\n-  Create MeilisearchController to expose search API with limit and page query parameters.\n- Convert limit and page query parameters to integers for MeiliSearch API compatibility.",
        "authorName": "Francisco Escalante",
        "authorEmail": "fxev90@gmail.com",
        "id": "147db431-2c76-4fc1-8918-76f9f0cc15ae"
    },
    {
        "sha": "669a971649aa17d1f420bba189d557da68d9fa6b",
        "message": "Add default values to Meilisearchconrtroller endpoint search query parameters\n\n- Set default index name to 'dcommits'\n- Initialize query string to an empty string\n- Set default limit to '10' and default page to '1'",
        "authorName": "Francisco Escalante",
        "authorEmail": "fxev90@gmail.com",
        "id": "5df0f957-313b-45eb-a62f-0e522bf78657"
    }
]

const CommitsPage = () => {

    return (
        <div className="p-4 space-y-4">
            <div className="flex flex-col items-center space-y-4">
                {hits.map((hit) => (
                    <div key={hit.id} className="flex items-center bg-white bg-opacity-50 p-4 rounded-lg shadow-md w-4/5">
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">SHA: {hit.sha}</h2>
                            <p className="text-sm text-gray-600">Message: {hit.message}</p>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm">Author: {hit.authorName}</p>
                            <p className="text-xs text-gray-500">Email: {hit.authorEmail}</p>
                        </div>
                    </div>
                ))}
                <div className="d-flex">
                      <button className=" m-4 px-4 py-2 bg-blue-500  text-white rounded">
                    Previous
                </button>
                <button className=" m-4 px-4 py-2 bg-blue-500  text-white rounded">
                    Next
                </button>
                </div>
              
            </div>
        </div>
    );
};


export default CommitsPage;