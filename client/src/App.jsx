import { useState } from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
import Recipe from "./components/Recipe";
import HomePage from "./components/HomePage";
import Login from "./components/Login.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // define routes
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/Recipe",
    element: <RecipeList />,
  },
  {
    path: "/:id",
    element: <Recipe />,
  },
  {
    path: "/addRecipe",
    element: <NewRecipe />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
