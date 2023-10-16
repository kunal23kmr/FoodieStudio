import React, { useState } from "react";
import ViewProfile from "./ViewProfile.jsx";
import Login from "./Login";

function Profile() {
    const [isLog, setisLog] = useState(0);
    return (<>
        {(isLog !== 0) ? <ViewProfile currUser={isLog} fun={setisLog}/> : <Login fun={setisLog}/>}
    </>);
}

export default Profile;
