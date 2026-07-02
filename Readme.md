# Note-Taking API

A simple RESTful API for creating, reading, updating, and deleting notes. Built with Node.js and Express, using an in-memory data store (no database required).

## Features

- Full CRUD support for notes
- In-memory storage (data resets on server restart)
- UUID-based note IDs
- JSON request/response format

## Tech Stack

- **Node.js**
- **Express.js**
- **uuid** – for generating unique note IDs

## Project Structure

```
.
├── controllers/
│   └── noteController.js   # Business logic for notes
├── routes/
│   └── noteRoutes.js       # Route definitions
├── server.js                # App entry point
└── README.md
```

## Getting Started

### Prerequisites

- Node.js installed (v18+ recommended)

### Installation

```bash
git clone <your-repo-url>
cd note-taking-api
npm install
```

### Running the Server

```bash
node server.js
```


## API Endpoints

| Method | Endpoint       | Description                  |
|--------|----------------|-------------------------------|
| GET    | `/`            | Welcome message + endpoint list |
| GET    | `/notes`       | Get all notes                |
| GET    | `/notes/:id`   | Get a single note by ID      |
| POST   | `/notes`       | Create a new note            |
| PUT    | `/notes/:id`   | Fully update a note          |
| PATCH  | `/notes/:id`   | Partially update a note      |
| DELETE | `/notes/:id`   | Delete a note                |

### Request Body (POST / PUT / PATCH)

```json
{
  "title": "New Update Launch Checklist",
  "content": "Run tests, deploy to production, and hopefully secure a well placed internship!"
}
```

> `title` and `content` are both required when creating a note (`POST /notes`).

### Example Responses

**POST /notes** → `201 Created`
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "title": "New Update Launch Checklist",
  "content": "Run tests, deploy to production, and hopefully secure a well placed internship!",
  "createdAt": "2026-07-02T10:00:00.000Z"
}
```

**GET /notes/:id** → `404 Not Found` (if note doesn't exist)
```json
{
  "error": "Note not found"
}
```

**DELETE /notes/:id** → `204 No Content`

## Error Handling

- Returns `400 Bad Request` if `title` or `content` is missing on note creation.
- Returns `404 Not Found` for unknown routes or missing notes.

## Notes / Limitations

- Data is stored in memory and will be lost when the server restarts.
- No authentication or persistence layer is included — intended for learning/demo purposes.

## License

ISC

## API TESTING
 
 The API can be tested using:

 - Postman 

 Postman Collection Documentation URL for Note-Taking API
 https://documenter.getpostman.com/view/47273374/2sBY4HT3Ub

 ---