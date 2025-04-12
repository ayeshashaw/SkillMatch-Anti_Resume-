# 🌐 Full Stack Job Challenge Platform

This is a modern web application that connects employers with candidates through coding challenges. Employers can create and manage coding challenges, while candidates can participate and showcase their skills. 💼👩‍💻

## Project Structure

```
├── frontend/     # React application
├── backend/      # Express server
```
**Deployed link** - 🔗 https://skill-match-anti-resume.vercel.app/)

## Tech Stack

### Frontend 🚀
- React with Vite
- React Router for navigation
- React Query for data fetching
- Radix UI components
- TailwindCSS for styling
- TypeScript support

### Backend ⚙️
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Multer for file uploads

## Features

### For Employers 🧑‍🏫
- Secure authentication system 🔐
- Create and manage coding challenges 📝
- Review candidate submissions 📥
- Dashboard for tracking applications 📊

### For Candidates 👩‍🎓
- User authentication 🔒
- Browse available challenges 🔍
- Submit solutions to challenges 📤
- Track progress on submissions 📈

## Getting Started

### Prerequisites 🛠️
- Node.js (version 14 or higher)
- MongoDB instance
- npm or bun package manager

### Backend Setup
1. Navigate to the backend directory:
 ```bash
   cd backend
 ```
2. Install dependencies:
 ```bash
   npm install
 ```
3. Create a `.env` file with the required environment variables:
 ```
 PORT=8080
 MONGODB_URI=your_mongodb_connection_string
 JWT_SECRET=your_jwt_secret
 ```
4. Start the development server:
 ```bash
   npm run dev
 ```

### Frontend Setup
1. Navigate to the frontend directory:
 ```bash
   cd frontend
 ```
2. Install dependencies:
 ```bash
   npm install
 ```
3. Create a `.env` file with the required environment variables:
 ```
 VITE_API_URL=http://localhost:8080
 ```
4. Start the development server:
 ```bash
   npm run dev
 ```

## API Routes

### Employer Routes 🧑‍💼
- **POST /api/employers/signup** - Register a new employer
- **POST /api/employers/login** - Employer login
- **GET /api/employers/challenges** - Get all challenges
- **POST /api/employers/challenges** - Create a new challenge

### Candidate Routes 👩‍💻
- **POST /api/users/signup** - Register a new candidate
- **POST /api/users/login** - Candidate login
- **GET /api/users/challenges** - Get available challenges
- **GET /api/users/challenges/:id** - Get challenge details

## Authentication 🔑

The application uses JWT (JSON Web Tokens) for authentication. Tokens are stored in localStorage and included in the Authorization header for API requests.

## Development 🔧

The project employs modern development tools and practices:
- ESLint for code linting
- TypeScript for type safety
- Vite for a fast development experience
- TailwindCSS for utility-first styling

## License 📜

This project is distributed under the ISC License.
