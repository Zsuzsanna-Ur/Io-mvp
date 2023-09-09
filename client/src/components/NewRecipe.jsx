import React from "react";
import axios from "axios";
import "./NewRecipe.css";
import { Link } from "react-router-dom";

const NewRecipe = () => {
  const [formValue, setformValue] = React.useState({
    name: "",
    category: "",
    link: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    // store the states in the form data
    event.preventDefault();

    const newRecipeData = new FormData();
    newRecipeData.append("name", formValue.name);
    newRecipeData.append("category", formValue.category);
    newRecipeData.append("link", formValue.link);
    newRecipeData.append("description", formValue.description);

    try {
      // make axios post request

      const response = await axios({
        method: "POST",
        url: "http://localhost:5173/api/recipes",
        data: JSON.stringify({
          name: formValue.name,
          category: formValue.category,
          link: formValue.link,
          description: formValue.description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="Title">New Recipe</div>
      <input
        type="text"
        name="name"
        placeholder="enter recipe name"
        value={formValue.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="enter recipe category"
        value={formValue.category}
        onChange={handleChange}
      />
      <input
        type="url"
        name="link"
        placeholder="enter recipe link"
        value={formValue.link}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="enter recipe description"
        value={formValue.description}
        onChange={handleChange}
      />
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewRecipe;
