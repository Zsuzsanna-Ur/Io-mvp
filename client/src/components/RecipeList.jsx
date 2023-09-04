import React from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./RecipeList.css";

// state to store RecipeList
// function to get recipes from backend
// useEffect that triggers the function

function RecipeList(props) {
  const [recipes, setRecipes] = React.useState([]); //set recipes will update state any time it's called and re-render
  const navigate = useNavigate();

  React.useEffect(() => {
    Axios.get("http://localhost:4000/api/recipes").then((response) => {
      //setting recipes to the response of the data
      //not doing any error handling yet
      setRecipes(response.data);
    });
  }, []); //will run any time dependencies change, leaving array empty because nothing needs to be added after it's initially fetched

  return (
    <>
      <div className="RecipeList">
        <div className="Title">Your Recipes</div>
        <ul>
          {recipes.map((r) => (
            <li key={r.id}>
              <div className="RecipeNames">
                <span onClick={(e) => navigate(`/${r.id}`)}>{r.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="addRecipeLink">
        <Link to="/addRecipe">Add a Recipe Here!</Link>
      </div>
    </>
  );
}

export default RecipeList;
