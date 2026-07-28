# 📝 MERN Post Feed App

A full-stack **MERN application** built using **React, Tailwind CSS, Node.js, Express.js, and MongoDB**. The application allows users to create new posts and instantly view them in a dynamic feed through a RESTful API.

---

## 🚀 Features

- ➕ Create New Posts
- 📰 View All Posts in a Feed
- ⚡ Real-Time Feed Updates After Posting
- 📱 Responsive User Interface
- 🌐 RESTful API
- ☁️ MongoDB Atlas Integration
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast Development with Vite

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- CORS

### Development Tools
- Visual Studio Code
- Git & GitHub
- Postman / Thunder Client

---

## 📁 Project Structure

```
POST-APP/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## 📱 Application Workflow

1. User enters a post.
2. The frontend sends the data to the Express backend.
3. The backend validates and stores the post in MongoDB Atlas.
4. The frontend fetches all posts from the API.
5. Newly created posts appear in the feed.

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/posts` | Fetch all posts |
| POST | `/api/posts` | Create a new post |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-github-username/post-app.git
```

### Navigate to the Project

```bash
cd post-app
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
MONGO_URI=your_mongodb_connection_string
```

---

## ▶️ Run the Project

### Backend

```bash
cd server
npm start
```

Runs on:

```
http://localhost:3000
```

### Frontend

```bash
cd client
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🌐 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

## 📚 Learning Outcomes

This project helped me understand:

- MERN Stack Development
- React Component Architecture
- REST API Development
- Axios for API Communication
- MongoDB & Mongoose Integration
- Express.js Routing
- Responsive UI with Tailwind CSS
- Environment Variable Management
- Git & GitHub Workflow
- Frontend Deployment using Vercel
- Backend Deployment using Render

---

## 🔮 Future Enhancements

- Edit Posts
- Delete Posts
- User Authentication
- Image Uploads
- Like & Comment System
- Search Posts
- Pagination
- User Profiles

---

## 👨‍💻 Author

**Dhairya Bandekar**

- GitHub: https://github.com/dhairyabandekar
- LinkedIn: https://www.linkedin.com/in/dhairya-bandekar-709bb9257/

---

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.

Happy Coding! 🚀
