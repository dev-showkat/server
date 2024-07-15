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

```
server/
├── node_modules/
├── src/ 
│    ├── config/
│    │   ├── db.js                  # Database connection configuration
│    ├── controllers/
│    │   ├── userController.js      # User controller logic
│    │   ├── itemController.js      # Item controller logic
│    ├── middlewares/
│    │   ├── authMiddleware.js      # Authentication middleware
│    ├── models/
│    │   ├── User.js                # User model schema
│    │   ├── Item.js                # Item model schema
│    ├── routes/
│    │   ├── userRoutes.js          # User routes
│    │   ├── itemRoutes.js          # Item routes
│    ├── utils/
│    │   ├── generateToken.js       # JWT token generation
│    ├── server.js                  # Environment variables
├── .env                            # NPM package configuration
├── .gitignore                      # Git ignore file
├── LICENSE                         # License
├── package-lock.json               # NPM package configuration mete data
├── package.json                    # NPM package configuration
├── README.md                       # Project README file
├── .env                            # Environment variables
```