import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary";
import {Error} from "./Errors/Error"
import {ErrorPage} from "./Errors/ErrorPage"
import { SignIn } from "./Components/SignIn"
import { SignUp } from "./Components/SignUp"
import { ComputerStore } from "./Components/ComputerStore";
import { useNavigate } from "react-router-dom";
import './index.css'
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Privacy } from "./Components/Privacy";

function App() {
  const navigate = useNavigate()
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <SignIn />
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage />
    },
    {
      path: "/signup",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <SignUp />
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage />
    },
    {
      path: "/store",
      loader: async () => {

        const checkCookie = async () => {
          try {
            const IsAuthenticated = await fetch("https://back-store-mkge.onrender.com/auth/welcome", {
              method: "GET",
              credentials: "include"
            })
  
            if(IsAuthenticated.status === 401){
              await refreshAccessToken()
              return checkCookie()
            }
  
            const getAnswer = await IsAuthenticated.json()
            
            if(IsAuthenticated.ok){
              console.log("Nice")
              console.log(getAnswer)
            }
          } catch (error) {
            console.log(error)
          }
        }
  
        const refreshAccessToken = async () => {
          try {
              const response = await fetch('https://back-store-mkge.onrender.com/auth/refreshtoken', {
                  method: 'POST',
                  credentials: 'include'
              });
              const getAnswer = response.json()
              console.log(getAnswer)
  
              if(response.status === 403){
                navigate("/")
              }
      
            
          } catch (error) {
              console.error('Error refreshing access token:', error);
          }
      };
  
      checkCookie()
  

      },
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <ComputerStore />
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage />
    },
    {
      path: "/privacy",
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <Privacy />
        </ErrorBoundary>
      ),
      errorElement: <ErrorPage />
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" transition={Zoom} />
    </>
  )
}

export default App
