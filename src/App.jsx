import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccountingExpense from "./ExpenseAccounting";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AccountingExpense />
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;