import React, {useState} from "react";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

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

export default function CreateRecipie() {

    const [recipie, setRecipie] = useState({
        recipie: {
            id: 0,
            title: "",
            meal_type: "",
            description: "",
            ingredient_name: [],
            instructions: "",
            user_id: 0
        },
        addNew: false,
        item: ""
    })

    const addIngredient = e => {
        e.preventDefault();
        setRecipie({
            ...recipie,
            addNew: true
        })
    }

    const submitAdd = (e) => {
        e.preventDefault();
        setRecipie({
            ...recipie,
            recipie: {
                ...recipie.recipie,
                ingredient_name: [...recipie.recipie.ingredient_name, recipie.item]
            },
            addNew: false
        });
    }

    const ingredientChange = e => {
        setRecipie({
            ...recipie,
            item: e.target.value
        })
    }

    const editField = (e) => {
        console.log(e.target.id);
    }

    const cancel = e => {
        e.preventDefault();
        setRecipie({
            ...recipie,
            addNew: false
        })
    }

    return(
        <>
        <h2>Add/Edit Recipie</h2>
        <Form>
            <Input type="text" placeholder="Recipie Name..." name="rec-name"/>

            <select>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
            </select>

            <textarea placeholder="Enter recipie description..."/>

            <Cont>
                {recipie.recipie.ingredient_name.map((item, index) => {
                    return(
                        <Ingr>
                            <Input type="text" id={"ingredient" + index} value={item} onChange={editField}/> <FaTrash />
                        </Ingr>
                    )
                })}
            </Cont>

            {recipie.addNew ? <div>
                <Input type="text" name="ingredient" id="ingredient" placeholder="Enter Ingredient..." onChange={ingredientChange}/>
                <button onClick={submitAdd}>Add</button>
                <button onClick={cancel}>Cancel</button>
                </div> : <button onClick={addIngredient}>Add Ingredient</button>}

            <textarea placeholder="Instructions..." />

            <button>Add Recipie</button>
        </Form>
        </>
    )
}