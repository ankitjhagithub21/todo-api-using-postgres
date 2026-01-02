
import { Button } from "@/components/ui/button"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
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