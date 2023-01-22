import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("login")    
    }
    
    return (
        <div>
            <h1>Landing</h1>
            <button type="button" onClick={handleSignIn}>
                Sign In
            </button>
        </div>
    )
}

export { Landing }