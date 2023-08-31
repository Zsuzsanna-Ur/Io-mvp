import React from "react";
import Axios from "axios";
import "./RecipeList.css";

// state to store RecipeList
// function to get recipes from backend
// useEffect that triggers the function

function RecipeList(props) {
  const [recipes, setRecipes] = React.useState([]); //set recipes will update state any time it's called and re-render

  React.useEffect(() => {
    Axios.get("http://localhost:4000/api/recipes").then((response) => {
      //setting recipes to the response of the data
      //not doing any error handling yet
      setRecipes(response.data);
    });
  }, []); //will run any time dependencies change, leaving array empty because nothing needs to be added after it's initially fetched

  return (
    <div className="RecipeList">
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <span onClick={(e) => props.showCB(r.id)}>
              {r.name} {r.description} {r.category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
