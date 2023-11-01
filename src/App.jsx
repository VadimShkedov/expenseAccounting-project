import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExpenseAccounting from "./ExpenseAccounting";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ExpenseAccounting />
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;