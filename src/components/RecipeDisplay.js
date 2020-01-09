import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

function RecipeDisplay(props) {

    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        axiosWithAuth().get(`/recipes/${props.match.params.id}`)
        .then(res => {
            console.log(res)
            setRecipe({
                ...res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const test = () => {
        console.log(recipe)
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <h2>{recipe.meal_type}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.ingredient_name}</p>
            <p>{recipe.instructions}</p>

            <Link to={`/profile/${recipe.user_id}`}>
                View Chef
            </Link>
        </div>
    )
}

export default RecipeDisplay;