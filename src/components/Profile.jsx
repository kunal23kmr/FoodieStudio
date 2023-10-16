import React from "react";
import { useNavigate } from "react-router";

function Profile() {
    const navigate = useNavigate();
    // Use a ternary operator to conditionally navigate
    return (<>
        {(prop.isLog !== 0) ? navigate('/viewprofile') : navigate('/login')}
    </>
    );
}

export default Profile;
