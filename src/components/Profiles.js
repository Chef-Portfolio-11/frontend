import React, { useState, useEffect } from "react";
// import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
import Profile from './Profile';


const Profiles = props => {
    const [chefData, setChefData] = useState();
    const getProfiles = () => {
        axios
            .get('https://bw-chef-portfolio.herokuapp.com/api/user')
            .then(res => {
                console.log(res, 'got data!');
                setChefData(res.data);
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
        <div className='prof'>
        {
            chefData.map((e, id) => (<Profile key={id} myChef={e} />))
        }
        </div>
    )
}

export default Profiles