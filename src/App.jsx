import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExpanseAccounting from "./ExpenseAccounting";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ExpanseAccounting />
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;