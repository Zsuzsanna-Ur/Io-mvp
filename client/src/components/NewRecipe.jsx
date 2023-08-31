import React, { useState } from "react";
import "./NewRecipe.css";

const EMPTY_FORM = {
    name: "",
    description: "",
    link: "",
    category: ""
  };

function NewRecipe(props){
    const [formData, setFormData] = useState(EMPTY_FORM);
    function handleChange(event) {
        let { name, value } = event.target;
        setFormData(formData => ({ ...formData, [name]: value }));
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        props.addStudentCb(formData);
        setFormData(EMPTY_FORM);
      }
    
      return (
        <div className="NewRecipe">
          <form onSubmit={handleSubmit}>
            <label>
              Recipe Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
    
            <label>
              Recipe Description
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>

            <label>
              Recipe Link
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleChange}
              />
            </label>

            <label>
              Recipe Category
            
            </label>
    
            <button type="submit">Add Recipe</button>
          </form>
        </div>
          );
}

  export default NewRecipe;
