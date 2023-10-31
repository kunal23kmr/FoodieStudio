import React, { useState, useEffect } from "react";
import Login from "./Login";
import axios from "axios";
import { useNavigate } from "react-router";

function Profile() {
    const [currUser, setuser] = useState(-1);
    const navigate = useNavigate();

    useEffect(() => {
        // Make the Axios request when the component mounts
        axios.get(`http://localhost:3001/getuser`)
            .then(res => {
                // Handle the response here
                setuser(res.data);
            })
            .catch(err => {
                console.log('Error aaya hai pro:', err);
            });
    }, [currUser]); // Empty dependency array means this effect runs once when the component mounts

    return (
        <>
            {currUser !== -1 ? (
                navigate(`/viewProfile/${currUser}`)
            ) : (
                <Login />
            )}
        </>
    );
}

export default Profile;
