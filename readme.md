# 📝 Todo Management App

A **full-stack Todo Management Application** built with **React**, **Node.js**, **Express**, **PostgreSQL**, and **Prisma**, featuring **authentication**, **role-based access control**, **admin dashboard**, and **pagination**.

---

## 🚀 Features

### 👤 Authentication
- User registration & login
- JWT-based authentication (stored in HTTP-only cookies)
- Protected routes
- Logout functionality

### ✅ Todo Management
- Create, read, update, and delete todos
- Update todo status (Completed / Not Completed)
- Todos are user-specific (users can only manage their own todos)

### 🛡️ Authorization
- Role-based access (`USER`, `ADMIN`)
- Admin-only dashboard
- Secure update/delete (ownership check)

### 📊 Admin Dashboard
- View all todos (with pagination)
- View all users (with pagination)
- Update user roles (USER ↔ ADMIN)

### 🎨 UI & UX
- Built using **shadcn/ui**
- Responsive sidebar layout
- Confirmation modals
- Toast notifications
- Loading states

---

## 🧑‍💻 Tech Stack

### Frontend
- React + TypeScript
- React Router DOM
- Axios
- shadcn/ui
- Tailwind CSS
- Zod + React Hook Form
- Sonner (toast notifications)

### Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcryptjs
- Cookie Parser

---

## 📂 Project Structure

```bash todo-api-using-postgres/
├── backend/
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── prisma.config.ts
│   ├── prisma/
│   │   ├── migrations/
│   │   │   ├── 20260102064002_my_first_schema/
│   │   │   │   └── migration.sql
│   │   │   ├── 20260102065355_add_created_at_field/
│   │   │   │   └── migration.sql
│   │   │   ├── 20260102070518_add_role_field/
│   │   │   │   └── migration.sql
│   │   │   └── migration_lock.toml
│   │   └── schema.prisma
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── adminController.ts
│   │   │   ├── todoController.ts
│   │   │   └── userController.ts
│   │   ├── index.ts
│   │   ├── lib/
│   │   │   ├── jwt.ts
│   │   │   └── prisma.ts
│   │   ├── middlewares/
│   │   │   └── isAuth.ts
│   │   ├── routes/
│   │   │   ├── adminRoutes.ts
│   │   │   ├── todoRoutes.ts
│   │   │   └── userRoutes.ts
│   │   └── types/
│   │       └── express.d.ts
│   └── tsconfig.json
└── frontend/
    ├── .gitignore
    ├── README.md
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── App.tsx
    │   ├── components/
    │   │   ├── admin/
    │   │   │   ├── Home.tsx
    │   │   │   ├── Todos.tsx
    │   │   │   └── Users.tsx
    │   │   ├── custom/
    │   │   │   ├── AdminRoute.tsx
    │   │   │   ├── AppSidebar.tsx
    │   │   │   ├── AuthForm.tsx
    │   │   │   ├── CreateTodoModal.tsx
    │   │   │   ├── DeleteConfirmationModal.tsx
    │   │   │   ├── ProtectedRoute.tsx
    │   │   │   └── TodoCard.tsx
    │   │   └── ui/
    │   │       ├── avatar.tsx
    │   │       ├── badge.tsx
    │   │       ├── button.tsx
    │   │       ├── card.tsx
    │   │       ├── dialog.tsx
    │   │       ├── dropdown-menu.tsx
    │   │       ├── form.tsx
    │   │       ├── input.tsx
    │   │       ├── label.tsx
    │   │       ├── select.tsx
    │   │       ├── separator.tsx
    │   │       ├── sheet.tsx
    │   │       ├── sidebar.tsx
    │   │       ├── skeleton.tsx
    │   │       ├── sonner.tsx
    │   │       ├── spinner.tsx
    │   │       ├── table.tsx
    │   │       └── tooltip.tsx
    │   ├── constant.ts
    │   ├── context/
    │   │   └── UserContext.tsx
    │   ├── hooks/
    │   │   └── use-mobile.ts
    │   ├── index.css
    │   ├── layouts/
    │   │   └── AdminLayout.tsx
    │   ├── lib/
    │   │   └── utils.ts
    │   ├── main.tsx
    │   ├── pages/
    │   │   ├── Header.tsx
    │   │   ├── HomePage.tsx
    │   │   ├── LoginPage.tsx
    │   │   └── RegisterPage.tsx
    │   ├── redux/
    │   │   ├── store.ts
    │   │   └── todoSlice.ts
    │   ├── types/
    │   │   └── todo.ts
    │   └── vite-env.d.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```


## Backend .env
```bash
DATABASE_URL=postgresql://username:password@localhost:5432/tododb
JWT_SECRET=your_jwt_secret
PORT = 8000
ORIGIN = "http://localhost:5173"
NODE_ENV = "development" 
```

## Frontend .env
```bash
VITE_SERVER_URL = "http://localhost:8000"
```

## 🛠️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ankitjhagithub21/todo-api-using-postgres.git
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
Run Prisma migrations:
```bash
npx prisma migrate dev
```

Start Backend Server
```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🌐 API Endpoints (Sample)
### Auth

POST `/api/users/register`

POST `/api/users/login`

POST `/api/users/logout`

GET `/api/users/current`

### Todos

GET `/api/todos`

POST `/api/todos`

PUT `/api/todos/:id`

DELETE `/api/todos/:id`

### Admin

GET `/api/admin/users?page=&limit=`

PUT `/api/admin/update-user-role`

GET `/api/admin/todos?page=&limit=`





