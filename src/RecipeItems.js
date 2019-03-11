import React from "react";

const RecipeItems = ({ recipe }) => (
    <div className="recipeItems">
    <div>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt="food" />
      <p>Click <a href={recipe.url}>here</a> for the full recipe</p>
    </div>
    </div>
    
  );

export default RecipeItems;
