# 🚀 Taskzone - Node.js Backend Assignment

This is a full-featured backend web application built using **Node.js**, **Express.js**, and **MySQL Sequelize** ORM.

It includes **secure user authentication**, **role-based access control**, **task & user management**, and **file upload support**.

---

## 📦 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL with Sequelize ORM
- **Auth:** JWT + bcryptjs
- **File Upload:** Multer (User profile image)
- **API Format:** RESTful

---

## 📁 Folder Structure

node-assignment/
├── controllers/
├── routes/
├── models/
├── middlewares/
├── config/
├── uploads/
├── app.js
├── server.js
├── .env
└── README.md

yaml
Copy
Edit

---

## ✅ Features

### 🔐 Authentication

- User Register / Login
- JWT-based token system
- Password hashing using bcrypt

### 🛡️ Role-Based Access Control (RBAC)

- Roles: `Super-admin`, `Admin`, `Manager`
- Protected routes using custom middleware
- Role-specific permissions for user/task management

### 👤 User Management

- Add User (with image upload)
- List Users
- Assigned role, gender, creator info stored

### ✅ Task Management

- Add Task with:
  - Name, Description, Type (a-task to e-task)
  - Start/End Dates
  - Created By, Assigned User
- View Task List with associated user details

---

## 🔒 Roles & Permissions

| Role        | Add       | Update    | Delete    | View     |
|-------------|-----------|-----------|-----------|----------|
| Super-admin | User, Task| User, Task| ❌        | ❌       |
| Admin       | User, Task| User, Task| User, Task| User, Task |
| Manager     | ❌        | Task      | ❌        | User     |

---

## 🔗 API Endpoints

### ✅ Auth Routes

| Method | Route                 | Description          |
|--------|------------------------|----------------------|
| POST   | `/api/auth/register`  | Register new user    |
| POST   | `/api/auth/login`     | Login and get token  |

### 👤 User Routes

| Method | Route          | Description                |
|--------|----------------|----------------------------|
| POST   | `/api/users`   | Add new user (with image)  |
| GET    | `/api/users`   | Get all users              |

### 📝 Task Routes

| Method | Route          | Description         |
|--------|----------------|---------------------|
| POST   | `/api/tasks`   | Add new task        |
| GET    | `/api/tasks`   | Get all tasks       |

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
```bash
git clone <repo-url>
cd node-assignment
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create .env file
env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD="your_mysql_password"
DB_NAME=assignment_db
JWT_SECRET=your_jwt_secret
4. Start MySQL server & create DB
sql
Copy
Edit
CREATE DATABASE assignment_db;
5. Start the Server
bash
Copy
Edit
node server.js
🧪 Testing with Postman
Use the following flow:

Register a user (/api/auth/register)

Login and get token

Use token as Bearer <token> in headers

Add users with image using form-data

Add and view tasks

📁 Image Upload Info
Images are stored in /uploads/

Accessible via http://localhost:5000/uploads/<filename>

👨‍💻 Author
Made with ❤️ by Kanhaiya Lal Sharma
Contact: kanhaiyalalsharma009@gmail.com
