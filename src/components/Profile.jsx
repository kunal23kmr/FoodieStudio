// import React, { useState, useEffect } from "react";
// import Login from "./Login";
// import axios from "axios";
// import { useNavigate } from "react-router";

// function Profile() {
//     const [currUser, setuser] = useState(-1);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Make the Axios request when the component mounts
//         axios.get(`http://localhost:3001/getuser`)
//             .then(res => {
//                 // Handle the response here
//                 setuser(res.data);
//                 console.log('data hai: ',res.data)
//                 // fun(currUser);
//             })
//             .catch(err => {
//                 console.log('Error aaya hai pro:', err);
//             });
//     }, []); // Empty dependency array means this effect runs once when the component mounts

//     return (
//         <>
//             {currUser !== -1 ? (
//                 navigate(`/viewProfile/${currUser}`)
//             ) : (
//                 <Login />
//             )}
//         </>
//     );
// }

// export default Profile;


import React, { useState, useEffect } from "react";
import Login from "./Login";
import axios from "axios";
import { useNavigate } from "react-router";

function Profile() {
    const [currUser, setuser] = useState(-1);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/getuser`)
            .then(res => {
                setuser(res.data);
                console.log('data hai: ', res.data);
            })
            .catch(err => {
                console.log('Error aaya hai pro:', err);
            });
    }); // Empty dependency array means this effect runs once when the component mounts

    useEffect(() => {
        if (currUser !== -1) {
            navigate(`/viewProfile/${currUser}`);
        }
    }, [currUser, navigate]);

    return (
        <>
            {currUser === -1 ? (
                <Login />
            ) : null}
        </>
    );
}

export default Profile;
