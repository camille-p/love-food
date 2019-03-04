import React from 'react'

const RecipeList = props =>

    <ul>
        {props.results.map((result, index) =>
            <li key={index}>
                <img src={result.urls.small} key={result.id} alt="food"/>
            </li>
        )}
    </ul>;

export default RecipeList;