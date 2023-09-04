import { useState } from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
import Recipe from "./components/Recipe";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  //define routes
  {
    path: "/",
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
      <RouterProvider router={router}>
        <Link to="/addRecipe">Add a Recipe Here!</Link>
      </RouterProvider>
    </>
  );
}

export default App;
