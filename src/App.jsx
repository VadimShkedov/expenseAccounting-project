import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccountingExpense from "./AccountingExpense/";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AccountingExpense />
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;