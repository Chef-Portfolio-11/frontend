import React from 'react'

const Recipe = props => {
    return(
        <div className='recipe-card'>
            <div className='recipe' id={props.recipe.id}>
                <img src='https://picsum.photos/200' alt='food, hopefully' />
                <h2>{props.recipe.title}</h2>
                <p>{props.recipe.meal_type}</p>
                <h4>{props.recipe.description}</h4>
                <p>Ingredients:</p>
                <p>{props.recipe.ingredient_name}</p>
                <p>Instructions:</p>
                <p>{props.recipe.instructions}</p>
                <p>Uploaded by:</p>
                <p>Chef Name</p>
            </div>
            <div className='buttons'>
                <button className='edit-btn'>Edit</button>
                <button className='delete-btn'>Delete</button>
            </div>
        </div>
        
    )
}

export default Recipe