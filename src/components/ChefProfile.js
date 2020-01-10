import React, {useState, useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Chef from "./Chef";

export default function ChefProfile(props) {
    const [id, setId] = useState({
        users: [],
        user: ""
    });

    useEffect(() => {
        axiosWithAuth()
        .get("/user")
        .then(res => {
           setId({
               ...id,
               users: res.data
           })
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const user = id.users.filter(user => {
            return user.id == props.match.params.id
        })

        setId({
            ...id,
            user: user[0]
        })
    }, [id.users.length])
    
    return (
        <>

        {id.user && id.user.id ? <Chef full_name={id.user.full_name} location={id.user.location} phone={id.user.business_phone} email={id.user.business_email} id={id.user.id}/> : <></>}
        
        </>
    )
}