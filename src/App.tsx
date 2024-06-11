import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./styles/main.scss";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
