import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./routes/Router";

function App() {
  let router = createBrowserRouter(Router);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
