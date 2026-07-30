# 📝 POSTS APP (MERN Stack)

A full-stack **MERN Social Feed** application where users can register, log in, create posts with images, manage their own posts, and explore posts shared by other users. The project is built using **React, Tailwind CSS, Node.js, Express.js, MongoDB, and ImageKit**.

---

## 🚀 Features

### 👤 Authentication
- 🔐 User Registration
- 🔑 Secure Login using JWT Authentication
- 🔒 Protected Routes
- 🚪 Secure Logout

### 📸 Posts
- ➕ Create Posts with Image & Caption
- 🖼️ Upload Images using ImageKit
- 📰 View All Posts in the Community Feed
- ✏️ Edit Your Own Posts
- 🗑️ Delete Your Own Posts

### 👤 Profile
- Personal Profile Page
- View Only Your Uploaded Posts
- Total Posts Counter
- Easy Navigation between Profile and Feed

### 🛡️ Authorization
- Users can edit only their own posts
- Users can delete only their own posts
- Other users' posts remain protected

### 🎨 User Interface
- Responsive Design
- Clean and Modern UI
- Interactive Button Hover Effects
- Easy Navigation

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS
- Vite

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- Multer
- ImageKit
- dotenv
- CORS

## Development Tools
- Visual Studio Code
- Git & GitHub
- Postman / Thunder Client

---

# 📁 Project Structure

```text
POST-APP/

├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend/
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
└── README.md
```

---

# 📱 Application Workflow

1. User registers or logs into the application.
2. After login, the user is redirected to their profile.
3. Users can create a post by uploading an image and adding a caption.
4. Uploaded posts appear on both the Profile page and the Community Feed.
5. Users can edit or delete only their own posts.
6. Users can browse posts uploaded by everyone in the Feed.
7. Users can securely log out.

---

# 📡 REST API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/users/register` | Register a new user |
| POST | `/users/login` | Login user |

### Posts

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/posts` | Fetch all posts |
| GET | `/posts/my-posts` | Fetch logged-in user's posts |
| POST | `/posts` | Create a new post |
| PATCH | `/posts/:id` | Update your post |
| DELETE | `/posts/:id` | Delete your post |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-github-username/post-app.git
```

## Navigate to the Project

```bash
cd post-app
```

## Backend Setup

```bash
cd Backend
npm install
```

## Frontend Setup

```bash
cd ../Frontend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_public_key

IMAGEKIT_PRIVATE_KEY=your_private_key

IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

---

# ▶️ Run the Project

## Backend

```bash
cd Backend
npm start
```

Runs on:

```
http://localhost:3000
```

## Frontend

```bash
cd Frontend
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 🌐 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
| Image Storage | ImageKit |

---

# 📚 Learning Outcomes

Through this project, I gained hands-on experience with:

- MERN Stack Development
- React Routing
- REST API Development
- JWT Authentication
- Authorization
- Password Hashing with bcrypt
- Image Upload using Multer & ImageKit
- MongoDB & Mongoose
- Express Middleware
- React State Management
- Axios API Integration
- Protected Routes
- Environment Variable Management
- Git & GitHub Workflow
- Frontend & Backend Deployment

---

# 🔮 Future Enhancements

- ❤️ Like & Unlike Posts
- 💬 Comment System
- 👤 Profile Picture Upload
- 📅 Post Timestamp
- 🔍 Search Users & Posts
- 📱 Improved Mobile Responsiveness
- 🔔 Notifications

---

# 👨‍💻 Author

**Dhairya Bandekar**

- GitHub: https://github.com/dhairyabandekar
- LinkedIn: https://www.linkedin.com/in/dhairya-bandekar-709bb9257/

---

# ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.

Happy Coding! 🚀
