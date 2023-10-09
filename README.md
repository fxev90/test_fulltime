Fulltime Force Test Repository
Overview
This repository contains code for a Fulltime Force Test. It includes two main parts:

A NestJS application located in the git_commits_nest folder.
A React application located in the git_commits_react folder.
The project also utilizes Docker for running a PostgreSQL database and a MeiliSearch service.

Prerequisites
Node.js (v18.x or later)
Docker (v24.0.6 or later)
Yarn package manager


Getting Started
Clone the Repository
git clone https://github.com/fxev90/test_fulltime.git
cd test_fulltime
Environment Setup
Copy the .env.example file and rename it to .env. Update the .env file with your actual environment variables.
cp .env.example .env
Running PostgreSQL and MeiliSearch with Docker
In the root directory of the repository, run the following command to start the PostgreSQL and MeiliSearch services:
docker-compose up


Running the NestJS Application
Navigate to the git_commits_nest folder and install the dependencies:
cd git_commits_nest
Copy the .env.example file and rename it to .env. Update the .env file with your actual environment variables.
cp .env.example .env
yarn install
Run the application:
yarn start
the nest aplication will start running on http://localhost:3000/
if you go to that url it should show a hello world message
Endpoint: GET http://localhost:3000/search
Query Parameters:
index: Specifies the index to search within. In this case, it's set to commits.
query: The search query string. An empty string ("") means it will return all records.
page: The page number for pagination. Set to 5 in this example.
limit: The number of records to return per page. Set to 5 in this example.
Functionality:
Searches within the commits index.
Returns the 5th page of results.
Limits the number of results to 5 per page.

Running the React Application (This react application is build with vite typescript template)
Navigate to the git_commits_react folder and install the dependencies:
cd ../git_commits_react
yarn install
Run the application:
yarn start
The react application will start running on http://localhost:3003/
this app will have only 2 routes
GET  http://localhost:3003/profile
this route will show the personal infor for the 
GET http://localhost:3003/
this route will shoe the info for the commits in question with previous and next button to navigate the commits.
when click on a card with the info of any commit will display a modal with a bit more of information of the commits