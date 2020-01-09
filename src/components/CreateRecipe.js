import React, {useState} from "react";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import axios from "axios";
import { submitRecipe } from "../actions/actions";

const Input = styled.input`
    margin: 0.25rem auto;
	padding: 1rem;
	font-size: 2rem;
	border-radius: 10px;
    width: 80%;
`

const Form = styled.form`
    display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
    width: 80%;
    margin: 10px auto;

    * {
        margin: 10px auto;
        width: 80%;
        padding: 10px;
        border-radius: 10px;
    }

    button {
        min-width: 33%;
        padding: 0.5rem;
        font-size: 1.8rem;
    }

    textarea {
        min-height: 100px;
    }
`

const Ingr = styled.div`
    width: 80%;
    border-radius: 10px;
    background-color: #eee;
    display: flex;

    input {
        margin: 0 auto;
        width: 90%
    }

    svg {
        color: #000;
        width: 10%;
        font-size: 1.5rem;
    }
`

const Cont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 50px;
    min-width: 80%;
    background-color: #eee;
`

export default function CreateRecipe(props) {

    const [recipe, setRecipe] = useState({
        recipe: {
            id: 0,
            title: "",
            meal_type: "Breakfast",
            description: "",
            ingredient_name: [],
            instructions: "",
            user_id: 0
        },
        addNew: false,
        item: ""
    })

    const [ingredient, setIngredient] = useState({});

    const addRecipe = e => {
        e.preventDefault();
        setRecipe({
            ...recipe,
            recipe: {
                ...recipe.recipe,
                id: Date.now(),
                ingredient_name: Object.values(ingredient)
            }
        })

        submitRecipe(recipe);
        props.history.push('/profile')

        console.log(recipe.recipe);
    }

    const addIngredient = e => {
        e.preventDefault();
        setRecipe({
            ...recipe,
            addNew: true
        })
    }

    const submitAdd = (e) => {
        e.preventDefault();
        setRecipe({
            ...recipe,
            addNew: false
        });

        const length = () => {
            return Object.keys(ingredient).length;
        }

        setIngredient({
            ...ingredient,
            ["ingredient" + length()]: recipe.item
        })

        console.log(ingredient)
    }

    const ingredientChange = e => {
        setRecipe({
            ...recipe,
            item: e.target.value
        })
    }

    const editField = (e) => {
        setIngredient({
            ...ingredient,
            [e.target.id]: e.target.value
        })
    }

    const cancel = e => {
        e.preventDefault();
        setRecipe({
            ...recipe,
            addNew: false
        })
    }

    const recTitle = e => {
        setRecipe({
            ...recipe,
            recipe: {
                ...recipe.recipe,
                title: e.target.value
            }
        })
    }

    const recDesc = e => {
        setRecipe({
            ...recipe,
            recipe: {
                ...recipe.recipe,
                description: e.target.value
            }
        })
    }

    const mealType = e => {
        setRecipe({
            ...recipe,
            recipe: {
                ...recipe.recipe,
                meal_type: e.target.value
            }
        })
    }

    const recInst = e => {
        setRecipe({
            ...recipe,
            recipe: {
                ...recipe.recipe,
                instructions: e.target.value
            }
        })
    }

    const deleteIn = e => {
        e.preventDefault();
        let target = e.target.parentNode;
    
        if(target.nodeName !== "DIV") {          
            target = e.target.parentNode.parentNode;
            // target.remove();
            let value = Object.values(ingredient).filter(value => {
                return value !== target.firstElementChild.value
            })

            value.map((item, index) => {
                if(index <= 0) {
                    setIngredient({
                        ["ingredient" + index]: item
                    })
                }

                else {
                    console.log(item)
                    setIngredient({
                        ...ingredient,
                        ["ingredient" + index]: item
                    })
                }
            })
        }
        else {
            // // target.remove();
            let value = e.target.previousElementSibling;
        }
    }

    return(
        <div className="recipe">
        <h2>Add/Edit Recipe</h2>
        <Form>
            <Input type="text" placeholder="Recipe Name..." name="rec-name" onChange={recTitle}/>

            <select onChange="mealType">
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
            </select>

            <textarea onChange={recDesc} placeholder="Enter recipe description..."/>

            <Cont id="input-cont">
                {Object.values(ingredient).map((item, index) => {
                    return(
                        <Ingr>
                            <Input type="text" id={"ingredient" + index} value={item} onChange={editField}/> <FaTrash id={index} onClick={deleteIn} />
                        </Ingr>
                    )
                })}
            </Cont>

            {recipe.addNew ? <div>
                <Input type="text" name="ingredient" id="ingredient" placeholder="Enter Ingredient..." onChange={ingredientChange}/>
                <button onClick={submitAdd}>Add</button>
                <button onClick={cancel}>Cancel</button>
                </div> : <button onClick={addIngredient}>Add Ingredient</button>}

            <textarea onChange={recInst} placeholder="Instructions..." />

            <button onClick={addRecipe}>Add Recipe</button>
        </Form>
        </div>
    )
}