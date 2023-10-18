import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainComponent from "./MainComponent/MainComponent";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainComponent />
    }
  ])

  return <RouterProvider router={router} />
}

export default App;