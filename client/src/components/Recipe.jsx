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
    <div className="Recipe">
      <ul>
        {recipe && (
          <li key={recipe.id}>
            {/* if recipe is set, then will show */}
            <span onClick={(e) => props.showCB(recipe.id)}>
              {recipe.name} {recipe.description} {recipe.category}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Recipe;
