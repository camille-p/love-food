import React from 'react'
import RecipeItems from './RecipeItems.js'

class RecipeList extends React.Component {
    render() {        
        return(
            <div>
                {this.props.results.map((recipe, index) => (<RecipeItems key={index} recipe={recipe.recipe} />))}
            </div>
        )
    }
}
RecipeList.defaultProps= {
    results: []
}

export default RecipeList;