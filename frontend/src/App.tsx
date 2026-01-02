
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProtectedRoute from "./components/custom/ProtectedRoute"


const App = () => {



  const router = createBrowserRouter([
    {
      path:"/",
      element:<ProtectedRoute>
        <HomePage/>
      </ProtectedRoute>
    },
     {
      path:"/login",
      element:<LoginPage/>
    },

    {
      path:"/register",
      element:<RegisterPage/>
    },

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App