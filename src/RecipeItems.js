import React from "react";

const RecipeItems = ({ recipe, openModal }) => (
  <div className="recipeItems">
    <div>
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt="food"  onClick={() => openModal(recipe.ingredientLines)}/>
      <p>
        Click <a href={recipe.url}>here</a> for the full recipe
      </p>
    </div>
  </div>
);

export default RecipeItems;
