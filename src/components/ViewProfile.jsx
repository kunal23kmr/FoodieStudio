import { useState } from "react";

function ViewProfile({ currUser }) {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        city: '',
        state: '',
        country: '',
        password: ''
    });
    
    // setUser({...}) // get data from database and then update and show.
    return (<>
        <h1>View Profile</h1>
        <button>

        </button>
    </>);
}

export default ViewProfile;