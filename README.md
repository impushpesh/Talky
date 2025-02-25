# Talky - A Real-Time Chatting App

Talky is a real-time chat application built on the MERN (MongoDB, Express, React, Node.js) stack. It allows users to chat with each other seamlessly, leveraging Socket.IO for real-time communication.

## Features

- Real-time messaging
- User authentication with JWT
- Secure password hashing with bcrypt
- Image upload using Cloudinary
- Responsive UI with Tailwind CSS and DaisyUI

## Tech Stack

**Client:** React, Vite, TailwindCSS, Axios, Zustand

**Server:** Node, Express, MongoDB, Socket.IO, Cloudinary

---

## Installation

### Clone the repository
```bash
https://github.com/impushpesh/Talky.git
```

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
MONGODB_URI=
PORT=5001
JWT_SECRET=
NODE_ENV=development
CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## API Reference

### Authentication Routes

```http
POST /api/auth/login
```
- User login

```http
POST /api/auth/signup
```
- User signup

```http
POST /api/auth/logout
```
- User logout

```http
PUT /api/auth/update-profile
```
- Update user profile (Protected)

```http
GET /api/auth/check
```
- Check authentication status (Protected)

### Messaging Routes

```http
GET /api/messages/users
```
- Get all users for the sidebar (Protected)

```http
GET /api/messages/:id
```
- Get messages with a specific user by ID (Protected)

```http
POST /api/messages/send/:id
```
- Send a message to a specific user by ID (Protected)

---

