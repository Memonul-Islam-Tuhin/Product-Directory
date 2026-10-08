# 🛍️ Product Directory

A full-stack product directory application built with **React, React Router, Tailwind CSS, Vite, and Strapi**.

This project demonstrates modern frontend development, product data management, API integration, client-side routing, reusable React components, responsive UI design, and backend content management using Strapi.

---

## 🚀 Live Project

🔗 GitHub Repository:

https://github.com/Memonul-Islam-Tuhin/Product-Directory

* * *

## 🧰 Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| ⚛️ React | UI development |
| 🔗 React Router | Client-side routing |
| 🎨 Tailwind CSS | Utility-first styling |
| 🎯 Lucide React | Icons |
| ⚡ Vite | Development server and build tool |
| 🧹 ESLint | Code quality and linting |

### Backend

| Technology | Purpose |
|---|---|
| 🟣 Strapi | Headless CMS and REST API |
| 🗄️ SQLite | Database |
| 📦 Strapi Plugins | API, documentation and user permissions |

* * *

## ✨ Features

- 🛍️ Product directory interface
- 📦 Product data management
- 🔗 Backend API integration
- 🟣 Strapi-powered backend
- ⚛️ React component-based architecture
- 🛣️ Client-side routing
- 🎨 Tailwind CSS responsive styling
- 🎯 Lucide React icons
- 📱 Responsive-friendly UI
- 🔄 Frontend and backend development workflow
- 🗄️ SQLite database
- 🧹 ESLint configuration
- ♻️ Reusable React components

### Application Structure

```text
Frontend
   ↓
React Components
   ↓
React Router
   ↓
API Requests
   ↓
Strapi Backend
   ↓
SQLite Database
```

* * *

## 📁 Project Structure

```text
Product-Directory/
│
├── backend/
│   ├── config/
│   ├── database/
│   ├── public/
│   ├── src/
│   │   ├── admin/
│   │   ├── api/
│   │   └── index.js
│   ├── types/
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

* * *

# 💻 Installation & Setup

Follow the steps below to run this project on your local machine.

## 1. Clone the repository

Open Terminal / PowerShell / Git Bash and run:

```bash
git clone https://github.com/Memonul-Islam-Tuhin/Product-Directory.git
```

## 2. Go inside the project folder

```bash
cd Product-Directory
```

## 3. Install root dependencies

```bash
npm install
```

## 4. Install frontend dependencies

```bash
cd frontend
npm install
```

## 5. Install backend dependencies

Open another terminal and run:

```bash
cd backend
npm install
```

## 6. Open the project in VS Code

From the root project folder, run:

```bash
code .
```

> If `code .` does not work, open VS Code manually and select **File → Open Folder → Product-Directory**.

* * *

# ▶️ Run the Project

The root project is configured with `concurrently`, so the frontend and backend can be started together.

From the root directory, run:

```bash
npm run dev
```

This command starts:

```text
Frontend → Vite development server
Backend  → Strapi development server
```

You can also start them separately.

### Start Frontend

```bash
npm run frontend
```

### Start Backend

```bash
npm run backend
```

* * *

# 📜 Available Scripts

## Root Scripts

### Start frontend

```bash
npm run frontend
```

### Start backend

```bash
npm run backend
```

### Start frontend and backend together

```bash
npm run dev
```

### Build frontend

```bash
npm run frontend:build
```

### Build backend

```bash
npm run backend:build
```

### Build entire project

```bash
npm run build
```

The root `package.json` provides these scripts for running and building both parts of the application.

* * *

# 🧩 Main Dependencies

## Frontend

The frontend uses:

```text
React
React DOM
React Router
React Router DOM
Tailwind CSS
Lucide React
Vite
ESLint
```

These dependencies are defined in the frontend `package.json`.

## Backend

The backend uses:

```text
Strapi
Strapi Database
Strapi Cloud Plugin
Strapi Documentation Plugin
Strapi Users & Permissions
Nodemailer
SQLite
React
React DOM
Styled Components
```

The backend is based on Strapi 5 and uses SQLite as its database.

* * *

# 🔄 Application Flow

The application follows a simple full-stack architecture:

```text
User
 ↓
React Frontend
 ↓
React Router
 ↓
API Request
 ↓
Strapi Backend
 ↓
SQLite Database
 ↓
API Response
 ↓
React UI
```

The frontend communicates with the Strapi backend to retrieve and display product-related data.

* * *

# 🟣 Backend — Strapi

The backend is built with **Strapi**, which provides a headless CMS and API layer for managing application data.

Strapi is responsible for:

- 📦 Product data management
- 🔗 REST API
- 🗄️ Database communication
- 👤 User permissions
- 📚 API documentation
- ⚙️ Backend administration

The backend package uses Strapi `5.57.0` and SQLite through `better-sqlite3`.

* * *

# ⚛️ Frontend — React

The frontend is built with **React** and **Vite**.

It uses:

- ⚛️ React components
- 🛣️ React Router
- 🎨 Tailwind CSS
- 🎯 Lucide React icons
- 🔗 Backend API integration
- 📱 Responsive UI

The frontend package uses React 19, Vite 8, Tailwind CSS 4 and React Router.

* * *

# 🎨 Styling

This project uses **Tailwind CSS** for styling.

Tailwind CSS provides:

- 🎨 Utility-first styling
- 📱 Responsive design
- ⚡ Fast development
- ♻️ Reusable styling patterns
- 🧩 Flexible component design

Lucide React is used for application icons.

* * *

# ⚡ Why Vite?

Vite provides:

- ⚡ Fast development server
- 🔥 Hot Module Replacement (HMR)
- 📦 Production build support
- 🛠️ Simple React configuration
- 🚀 Fast development experience

The frontend project uses Vite as its development and build tool.

* * *

# 🗄️ Database

The backend uses **SQLite** as the database through Strapi.

SQLite is useful for this project because it provides:

- 🪶 Lightweight database setup
- ⚡ Fast local development
- 🛠️ Simple configuration
- 📦 Easy project setup

* * *

# 🧪 Development Workflow

After cloning the project:

```bash
git clone https://github.com/Memonul-Islam-Tuhin/Product-Directory.git

cd Product-Directory

npm install

cd frontend
npm install

cd ../backend
npm install

cd ..

npm run dev
```

The root `dev` script runs the frontend and backend concurrently.

For a production build:

```bash
npm run build
```

Or build the frontend and backend separately:

```bash
npm run frontend:build
```

```bash
npm run backend:build
```

* * *

# 📌 Project Purpose

This project was created as a **learning and development project** to practice full-stack web development.

Through this project, I practiced:

- ⚛️ React
- 🛣️ React Router
- 🎨 Tailwind CSS
- 🔗 API integration
- 🟣 Strapi
- 🗄️ Database management
- 📦 Product data handling
- 🧩 Full-stack project structure
- 🚀 Vite
- 🧹 ESLint

* * *

# 👨‍💻 Author

**Memonul Islam Tuhin**

- GitHub: https://github.com/Memonul-Islam-Tuhin

* * *

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

* * *

## 📄 License

This project is created for **learning and development purposes**.
