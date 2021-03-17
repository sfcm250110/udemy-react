import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // 1. Obtener la referencia al useContext
    const { user, setUser } = useContext(UserContext);

    // 2. setUser
    /*
    {
        id: 123,
        name: 'Santiago'
    }
    */

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>

            <pre>
                { JSON.stringify(user,null,3) }
            </pre>

            <button
                className="btn btn-primary"
                onClick={ () => setUser({
                    id: 123,
                    name: 'Santiago'
                }) }>
                Login
            </button>
        </div>
    )
}