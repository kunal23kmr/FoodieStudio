import React from "react";

function Profile({ isLog, na }) {
    // Use a ternary operator to conditionally navigate
    return (<>
        {(isLog !== 0) ? na('/viewprofile') : na('/login')}
    </>
    );
}

export default Profile;
