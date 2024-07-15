# Express Application - Express Server

This is the server-side of a web application built using Express.js and MongoDB. The application includes user authentication and CRUD operations.

## Features

- User Authentication (Sign Up, Log In, Log Out)
- CRUD Operations for Items (Create, Read, Update, Delete)
- JWT Authentication

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v22.3.0)
- npm (Node Package Manager)(10.8.1)
- MongoDB

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/dev-showkat/server.git
cd server
```

## Steps to run

- Go to server directory
```bash
cd server
```
- Install Dependencies
```bash
npm install
```
- Set Up Environment Variables, create .env file at root level of server directory, add these value
    - PORT=8000
    - MONGO_URI=your_mongodb_connection_string
    - JWT_SECRET=your_jwt_secret_key

- Run the project
```bash
npm start
```
- Run the project in development mode
```bash
npm run dev
```
     
## Folder structure


server/
├── node_modules/
├── src/ 
│    ├── config/
│    │   ├── db.js
│    ├── controllers/
│    │   ├── userController.js
│    │   ├── itemController.js
│    ├── middlewares/
│    │   ├── authMiddleware.js
│    ├── models/
│    │   ├── User.js
│    │   ├── Item.js
│    ├── routes/
│    │   ├── userRoutes.js
│    │   ├── itemRoutes.js
│    ├── utils/
│    │   ├── generateToken.js
│    ├── server.js
├── .env
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── README.md