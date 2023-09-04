// import React, { useState } from "react";
// import "./NewRecipe.css";

// const EMPTY_FORM = {
//   name: "",
//   description: "",
//   link: "",
//   category: "",
// };

// function NewRecipe(props) {
//   const [formData, setFormData] = useState(EMPTY_FORM);
//   function handleChange(event) {
//     let { name, value } = event.target;
//     setFormData((formData) => ({ ...formData, [name]: value }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     props.addStudentCb(formData);
//     setFormData(EMPTY_FORM);
//   }

//   return (
//     <div className="NewRecipe">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>

//         <label>
//           Link
//           <input
//             type="url"
//             name="link"
//             value={formData.link}
//             onChange={handleChange}
//           />
//         </label>

//         <label>
//           Category
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//           />
//         </label>

//         <label>
//           Description
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </label>

//         <button type="submit">Add Recipe</button>
//       </form>
//     </div>
//   );
// }

// export default NewRecipe;

import React from "react";
import axios from "axios";

const NewRecipe = () => {
  const [formValue, setformValue] = React.useState({
    name: "",
    category: "",
    link: "",
    description: "",
  });

  const handleSubmit = async () => {
    // store the states in the form data
    const newRecipeData = new FormData();
    newRecipeData.append("name", formValue.name);
    newRecipeData.append("category", formValue.category);
    newRecipeData.append("link", formValue.link);
    newRecipeData.append("description", formValue.description);

    try {
      // make axios post request

      const response = await axios({
        method: "post",
        url: "/api/recipes",
        data: newRecipeData,
        headers: { "Content-Type": "multipart/form-data" },
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
      <p>Submit New Recipe</p>
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
      <button type="submit">submit</button>
    </form>
  );
};

export default NewRecipe;
