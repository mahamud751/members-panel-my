import { useEffect } from 'react'
import axios from 'axios';
import Image from 'next/image';

function Welcome(props) {
    useEffect(() => {
        const login = { username: props.userId, password: props.Password }
        console.log(login);
        const response = axios
            .post(process.env.API_URL + "/api/ev1/UserLogin", login)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data);
                window.location.href = "http://localhost:3000/";
            })
            .catch((error) => {
                console.log("do not login");
            });
    }, [])

    return (
        <div>

            welcome to our account

        </div>
    )
}


export async function getServerSideProps({ query }) {
    const userId = query.userId;
    const Password = query.Password;
    return {
        props: { userId, Password },
    };
}

export default Welcome