import React from "react";
import "./RecipeList.css";

function RecipeList(props){
    return (
        <div className="RecipeList">
            <ul>
                {props.recipes.map(r => (
                    <li key={r.id}>
                        <span onClick={e => props.showCB(r.id)}>
                            {r.name} {r.description} {r.category_id}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;