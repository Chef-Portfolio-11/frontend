import React, { useState, useEffect } from "react";
import axios from 'axios';
import Profile from './Profile';
import RecipesByChef from "./RecipesByChef";

const ChefDashboard = (props) => {
    const [chefData, setChefData] = useState();
    const getProfiles = () => {
        axios
            .get('https://bw-chef-portfolio.herokuapp.com/api/user')
            .then(res => {
                console.log(res, 'got data!');

                setChefData(res.data.filter(function (e) {
                    return e.id === props.chefid
                }));
            })
            .catch(err => {
                console.log('error getting chef data;', err)
            })
    }

    useEffect(() => {
        setChefData(getProfiles(1));
    }, []);

    if (chefData === undefined) {
        return <div>LOADING!</div>
    }

    return (
        <div className='ChefDashboard'>
            <div className='prof'>
                {
                    chefData.map((e, id) => (<Profile key={id} myChef={e} />))
                }
            </div>
            <RecipesByChef chefid={props.chefid}/>
        </div>
    )
}
export default ChefDashboard;