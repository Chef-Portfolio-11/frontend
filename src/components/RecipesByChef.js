import React, { useState, useEffect } from "react";
// import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
import Recipe from './Recipe';


const RecipesByChef = props => {
    const [recipeData, setRecipeData] = useState();
    const getRecipes = () => {
        axios
            .get(`https://bw-chef-portfolio.herokuapp.com/api/recipes/${props.chefid}/recipes`)
            .then(res => {
                console.log(res, 'got the recipe data!');
                setRecipeData(res.data);
            })
            .catch(err => {
                console.log('error getting chef data;', err)
            })
    }

    useEffect(() => {
        setRecipeData(getRecipes());
    }, []);

    if (recipeData === undefined) {
        return <div>LOADING!</div>
    }

    return (
        <div className='prof'>
        {
            recipeData.map((e, id) => (<Recipe key={id} recipe={e} chefid={props.chefid} />))
        }
        </div>
    )
}

export default RecipesByChef