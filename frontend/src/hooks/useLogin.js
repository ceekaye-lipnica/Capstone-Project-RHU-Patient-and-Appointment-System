// import { useState } from "react";
// import { UseAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = UseAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch ('/portal/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
    
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok) {
            //save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //updete the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return {login, isLoading, error}
}