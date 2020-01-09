import React from 'react'

const Recipe = props => {
    return(
        <div className='recipe' id={props.recipe.id}>
            <img src='https://picsum.photos/200' alt='food, hopefully' />
            <h2>{props.recipe.title}</h2>
            <p>{props.recipe.meal_type}</p>
            <h4>{props.recipe.description}</h4>
            <p>Ingredients:</p>
            <p>{props.recipe.ingredient_name}</p>
            <p>Instructions:</p>
            <p>{props.recipe.instructions}</p>
        </div>
    )
}

export default Recipe