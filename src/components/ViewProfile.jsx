import { useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function ViewProfile() {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        city: '',
        state: '',
        country: '',
    });

    const { user_id } = useParams();

    axios.post('http://localhost:3001/viewProfile', user_id)
        .then(res => {
            console.log(res)
            const profile = res.data[0];
            setUser(() => {
                return {
                    first_name: profile.first_name,
                    last_name: profile.last_name,
                    phone_number: profile.mobile_number,
                    city: profile.city,
                    state: profile.state,
                    country: profile.country,
                }
            })
        })
        .catch(err => {
            console.log('Error aaya hai :', err);
        });


    // setUser({...}) // get data from database and then update and show.
    return (<>
        <h1>View Profile</h1>
        <h1>Keerti design kregi.</h1>
        <button>

        </button>
    </>);
}

export default ViewProfile;