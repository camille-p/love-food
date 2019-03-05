import React from "react";

const RecipeItems = ({ recipe }) => (
    <div className="recipeList">
    <div>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt="food" />
      <a href={recipe.url}>Website where recipe is</a>
    </div>
    </div>
  );

export default RecipeItems;
