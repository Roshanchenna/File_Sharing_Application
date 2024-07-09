
# File Sharing Application

This is a file sharing application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can upload, download, and manage files securely.

## Features

- File uploading: Users can upload files to the server.
- File downloading: Users can download files from the server.
- File management: Users can view, rename, delete files they uploaded.
- Access control: Files are only accessible to authorized users.

## Technologies Used

- MongoDB: Database for storing user data and file metadata.
- Express.js: Backend framework for handling HTTP requests and routing.
- React.js: Frontend library for building the user interface.
- Node.js: JavaScript runtime for building the backend server.
- JWT (JSON Web Tokens): Used for user authentication.
- Multer: Middleware for handling file uploads.
- Axios: HTTP client for making requests to the backend from the frontend.

## Setup Instructions

1. Install dependencies:
   ```
   cd frontend
   npm install
   cd ..
   cd backend
   npm install
   ```
2. Start the backend:
   ```
   cd backend
   npm start
   ```
3. Start the frontend:
   ```
   cd frontend
   npm run dev
   ```
   
## License

This project is licensed under the [MIT License](LICENSE).

---

