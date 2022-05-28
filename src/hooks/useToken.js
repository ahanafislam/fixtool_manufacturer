import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect( () =>{
        const email = user?.user?.email;
        const presentUser = {
            name: user?.user?.displayName,
            email: email
        };
        if(email) {
            fetch(`https://fixtool.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(presentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);

    return [token];
};

export default useToken;