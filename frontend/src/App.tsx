import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/custom/ProtectedRoute";
import AdminRoute from "./components/custom/AdminRoute";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./components/admin/Home";
import Todos from "./components/admin/Todos";
import Users from "./components/admin/Users";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/dashboard",
      element: (
        <AdminRoute>
          <AdminLayout/>
        </AdminRoute>
      ),
      children:[
        { index:true, element:<Home/>},
        {path:"todos", element:<Todos/>},
        {path:"users", element:<Users/>}
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
