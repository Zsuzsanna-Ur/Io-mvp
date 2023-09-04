import React from "react";
import Axios from "axios";
import "./recipe.css";
import { useParams } from "react-router-dom";

function Recipe(props) {
  const params = useParams(); //recipe will be invoked when param is indicated
  const [recipe, setRecipe] = React.useState(); //set recipe will update state any time it's called and re-render

  React.useEffect(() => {
    Axios.get(`http://localhost:4000/api/recipes/${params.id}`).then(
      (response) => {
        //goes to URL and replaces id passed as parameter
        //not doing any error handling yet
        setRecipe(response.data);
      }
    );
  }, [params.id]);

  return (
    //display Recipe Data
    <div className="Recipe">
      <ul>
        {recipe && (
          <li key={recipe.id}>
            {/* if recipe is set, then will show */}
            <div className="Title">{recipe.name}</div>
            <div className="Category">{recipe.category}</div>
            <div className="Description">{recipe.description} </div>
            <div className="Link">
              <a href={recipe.link}>Click Here for the Recipe</a>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Recipe;
