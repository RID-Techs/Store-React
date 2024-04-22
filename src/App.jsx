import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary";
import {Error} from "./Errors/Error"
import {ErrorPage} from "./Errors/ErrorPage"
import { SignIn } from "./Components/SignIn"
import { SignUp } from "./Components/SignUp"
import { ComputerStore } from "./Components/ComputerStore";
import './index.css'
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

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
      element: (
        <ErrorBoundary fallback={<Error/>}>
          <ComputerStore />
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
