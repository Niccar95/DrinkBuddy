import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";

import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { DrinksPage } from "./pages/DrinksPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/drinks",
        element: <DrinksPage></DrinksPage>,
      },
    ],

    errorElement: <ErrorPage />,
  },
]);
