This is a RESTful CRUD Note taking API built with Node.js and Express.

Functionalities provided within this API included:

GET note   '/'
POST note  '/notes'
PUT note   '/notes/:id'
DELETE note '/notes/:id'

The Routes to this requests are in the /routes/noteRoutes.js

The business logic are in the /controllers/noteController.js

Project Structure
project/
│── controllers/
│   └── controller.js
│── routes/
│   └── noteRoutes.js
│── config/
│── server.js
│── package.json
│── README.md

Installation
Clone the repository using: 
git clone [http link]

Navigate into the project folder using:
cd your-repository
Install dependencies using:
npm install

Start the server
npm start

or

npm run dev

Create
POST /notes
Content-Type: application/json

{
  "title": "All Lives matter",
  "content": "Let the poor man breathe!" 
}
Response
{
  "id": "td_dejejee",
  "title": "All lives matter",
  "content":"Let the poor man breathe!",
  "dateCreated": 26-06-2026
}

Error Handling

The API returns appropriate HTTP status codes:

200 – Success
201 – Resource created
400 – Bad request
404 – Resource not found
500 – Internal server error

Author
All Group 4A members

