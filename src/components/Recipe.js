import React from 'react'
import { connect } from 'react-redux';
import { deleteRecipe } from '../actions/actions'
import EditRecipe from './EditRecipe';

const Recipe = props => {
    console.log(props)
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
                <button className='edit-btn' onClick={}>Edit</button>
                <button className='delete-btn' onClick={props.deleteRecipe}>Delete</button>
            </div>

        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        isDeleting: state.isDeleting
    }
}

export default connect(
    mapStateToProps,
    { deleteRecipe }
)(Recipe)