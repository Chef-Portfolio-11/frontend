import React from 'react'

const Recipe = props => {
    return(
        <div className='recipe'>
            <h2>{props.recipe.title}</h2>
            <p>{props.recipe.meal_type}</p>
            <h4>{props.recipe.description}</h4>
            <p>{props.recipe.ingredient_name}</p>
            <p>{props.recipe.instructions}</p>
        </div>
    )
}

export default Recipe