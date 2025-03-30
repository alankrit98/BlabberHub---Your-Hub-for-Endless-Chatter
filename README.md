# BlabberHub - Your Hub for Endless Chatter 🗨️
BlabberHub is a full-stack real-time chat website designed for seamless and dynamic communication. It offers features such as instant messaging, real-time updates, and an intuitive user interface, built with modern technologies.

## Tech Stack 🚀
**Frontend:** React, Vite, Tailwind CSS, DaisyUI
**Backend:** Node.js, Express.js
**Real-time Communication:** Socket.io
**State Management:** Zustand
**API Communication:** Axios
**Icons:** Lucide React
**Build Tool:** Vite

## Features💡
**✅ Real-Time Messaging:** Instantly send and receive messages with real-time updates using Socket.io.
**✅ Responsive UI:** Modern, clean, and fully responsive UI built with Tailwind CSS and DaisyUI.
**✅ Authentication:** Secure login and signup functionality.
**✅ User-friendly Notifications:** Toast notifications for better user experience.
**✅ Dark & Light Themes:** Multiple DaisyUI themes for enhanced UI customization.
**✅ State Management:** Efficient state handling using Zustand.
**✅ API Integration:** Axios for seamless backend communication.

## Folder Structure 🛠️
```
/BlabberHub
 ├── /client               # Frontend React application
 │      ├── /public         # Static assets
 │      ├── /src            # React components and pages
 │      │      ├── /components      # Reusable UI components
 │      │      ├── /pages           # Chat, Login, Signup pages
 │      │      ├── /store           # Zustand state management
 │      │      ├── App.jsx          # Main App component
 │      │      └── index.jsx        # Entry point
 │      ├── package.json        # Frontend dependencies
 │      ├── tailwind.config.js   # Tailwind + DaisyUI configuration
 │      ├── vite.config.js       # Vite configuration
 │      └── postcss.config.js    # PostCSS configuration
 │
 ├── /server               # Backend with Node.js and Express.js
 │      ├── /routes            # API routes
 │      ├── /models            # Database models
 │      ├── index.js           # Entry point for server
 │      ├── package.json       # Backend dependencies
 │      └── server.js          # Express server
 │
 └── README.md              # Project documentation
```

## Installation and Setup ⚙️
#### Clone the repository
```
git clone <repository-link>
cd BlabberHub
Install dependencies
```

```
# Install frontend dependencies
cd client
npm install
```
```
# Install backend dependencies
cd ../server
npm install
Start the application
```

```
# Start the backend server
cd server
npm run dev
```
```
# Start the frontend app
cd ../client
npm run dev
```

#### Open the application
```
http://localhost:5000
You should now be able to access BlabberHub with real-time messaging!
```

## Environment Variables 🛠️
Create a .env file in the /server directory and add the following:

```
MONGODB_URI=<your-mongodb-connection-string>
PORT=5000
JWT_SECRET=<your-jwt-secret>
```
✅ Replace the values with your own MongoDB connection string and JWT secret.

## API Endpoints 🔥
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Authenticate a user
GET	/api/messages	Get all messages
POST	/api/messages	Send a new message

## Technologies Used 🌟
**React:** Component-based architecture for building the frontend.
**Vite:** Fast build tool for React apps.
**Tailwind CSS + DaisyUI:** For styling and pre-designed UI components.
**Socket.io:** Real-time, bidirectional, and event-based communication.
**Zustand:** Lightweight state management.
**Axios:** HTTP client for API communication.
**Node.js + Express.js:** Backend server and API routing.

## Future Enhancements 🚀
**User Authentication with JWT:** Add token-based authentication for secure login sessions.
**Profile Management:** Add user profiles with avatars.
**Chat Groups:** Allow creating and managing group chats.
**Message Reactions:** Enable emoji reactions on messages.

## Contributing 📜
Fork the repository.
Create a new branch: (`git checkout -b feature-branch.`)
Make your changes and commit them: (`git commit -m 'Add new feature'.`)
Push to the branch: (`git push origin feature-branch.`)
Submit a pull request.

#### License 🛡️
This project is licensed under the [MIT LICENSE](LICENSE)

