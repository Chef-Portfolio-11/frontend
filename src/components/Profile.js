import React, { useState, useEffect } from "react";

const Profile = (props) => {
    return (
        // <div className = {['Profile']}>
        <div className='Profile'>
            <div className='frontFace'>
                <div className='chefName'>{props.myChef.full_name}</div>
                <div className='chefLocation'>{props.myChef.location}</div>
                <div className='phoneNumber'>{props.myChef.business_phone}</div>
                <div className='email'>{props.myChef.business_email}</div>
            </div>
        </div>
    );
};
export default Profile;