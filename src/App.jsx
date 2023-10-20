import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Index/Index";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index />
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;