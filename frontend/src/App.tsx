import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/custom/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import AdminRoute from "./components/custom/AdminRoute";
import AdminLayout from "./layouts/AdminLayout";

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
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        </AdminRoute>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
