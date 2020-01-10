import React from "react";
import RecipesByChef from "./RecipesByChef";

export default function Chef(props) {

    return (
        <div>
            <h2>{props.full_name}</h2>
            <h3>{props.location}</h3>
            <p>{props.phone}</p>
            <p>{props.email}</p>

            <div>
                <RecipesByChef chefid={props.id}/>
            </div>
        </div>
    )
}