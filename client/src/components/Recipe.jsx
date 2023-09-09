import React from "react";
import Axios from "axios";
import "./recipe.css";
import { useParams, Link } from "react-router-dom";

function Recipe(props) {
  const params = useParams(); //recipe will be invoked when param is indicated
  const [recipe, setRecipe] = React.useState(); //set recipe will update state any time it's called and re-render

  //   const deleteRecipe = (id) => {
  //     Axios.delete(`${recipe.id}`);
  //     setRecipe(
  //        recipe.filter((r) => {
  //           return r.id !== id;
  //        })
  //     );
  //  };

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
      <div className="NavBar">
        <ul>
          <li>
            <Link to="/addRecipe">Add a Recipe</Link>
          </li>
          <li>
            <Link to="/">Recipe List</Link>
          </li>
        </ul>
      </div>
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
      {/* <div>
        <button onClick={deleteRecipe(recipe.id)}>Delete</button>
      </div> */}
    </div>
  );
}

export default Recipe;
