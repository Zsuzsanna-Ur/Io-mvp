import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="NavBar">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
           <li>
            <Link to="/HomePage">Home</Link>
           </li>
          <li>
            <Link to="/addRecipe">Add a Recipe</Link>
          </li>
          <li>
            <Link to="/Recipe">Recipe List</Link>
          </li>
        </ul>
      </div>
      <div className="Title">Welcome to Your Recipe App!</div>
    </div>
  );
}
export default HomePage;
