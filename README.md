# Movie Finder API

Movie Finder is a RESTful API built with Node.js and Express that retrieves movie information from the OMDb API. Users can search for movies by title or retrieve detailed information about a specific movie using its IMDb ID.

## Features

- Search for movies by title
- Retrieve movie details by IMDb ID
- Fetch movie data from the OMDb API
- Validate required query parameters
- Handle external API errors with appropriate HTTP status codes
- Secure API credentials using environment variables
- Organize application logic with separate routes and controllers

## Technologies

- Node.js
- Express.js
- Axios
- dotenv
- OMDb API

## Project Structure

```text
movie-finder-api/
├── controllers/
│   └── movieController.js
├── routes/
│   └── movieRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

> The `.env` file is excluded from version control and must be created locally.

## Installation

Clone the repository and install the project dependencies:

```bash
git clone <repository-url>
cd movie-finder-api
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
OMDB_API_KEY=your_omdb_api_key
PORT=3000
```

An OMDb API key can be obtained from the OMDb API website.

## Running the Server

Start the development server:

```bash
npm run dev
```

The server will run at:

```text
http://localhost:3000
```

## API Endpoints

### Search for Movies

```http
GET /api/search?title=batman
```

The `title` query parameter is required.

Example:

```text
http://localhost:3000/api/search?title=batman
```

A request without a title returns a `400 Bad Request` response.

### Get Movie Details

```http
GET /api/movies/:id
```

Replace `:id` with an IMDb movie ID.

Example:

```text
http://localhost:3000/api/movies/tt0372784
```

## Error Handling

The API handles several types of errors:

A search request without the required title query parameter returns a 400 Bad Request.
If OMDb cannot find a movie matching the requested title or IMDb ID, the API returns a 404 Not Found response with a JSON error message.
The API uses try...catch blocks to handle errors during requests to the OMDb API. If an external API request fails, the server returns a 500 Internal Server Error response with a JSON error message.

## What I Practiced

This project provided practice with:

- Building a RESTful API with Express
- Creating modular routes and controllers
- Working with route parameters and query parameters
- Making asynchronous API requests with Axios
- Using `async`/`await`
- Handling errors with `try...catch`
- Managing environment variables securely