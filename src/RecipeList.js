import React from 'react'
import RecipeItems from './RecipeItems.js'

const RecipeList = (props) => {
    return (
        <div>
            {props.results.map((recipe, index) => (<RecipeItems openModal={props.openModal} key={index} recipe={recipe.recipe} />))}
        </div>
    )
}
RecipeList.defaultProps = {
    results: [],
    openModal: () => {}
}

export default RecipeList;