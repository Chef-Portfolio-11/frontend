import React, { useState, useEffect } from "react";
import Profile from './Profile';
import RecipesByChef from "./RecipesByChef";
import axiosWithAuth from "../utils/axiosWithAuth";

const ChefDashboard = (props) => {
    const [chefData, setChefData] = useState();
    const getProfiles = () => {
        axiosWithAuth()
        // not currently working, need users endpoint, needs to use axiosWithAuth
            .get(`/user/${localStorage.getItem('userId')}`)
            .then(res => {
                console.log(res, 'got data!');

                setChefData(res.data);
            })
            .catch(err => {
                console.log('error getting chef data;', err)
            })
    }

    // need another axios get for a specific chef's recipes

    useEffect(() => {
        setChefData(getProfiles(1));
    }, []);

    if (chefData === undefined) {
        return <div>LOADING!</div>
    }

    return (
        <div className='ChefDashboard'>
            <div className='prof'>
                 <Profile key={chefData.id} myChef={chefData} />
            </div>
            <RecipesByChef chefid={props.chefid}/>
        </div>
        // buttons for create recipe and edit recipe
    )
}
export default ChefDashboard;