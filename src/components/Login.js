import React, { useState } from 'react'
import { useAuth } from './auth'
import { useLocation, useNavigate } from 'react-router-dom'

export const Login = () => {
    const[user,setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.path||'/'
    
    const handleLogin=()=>{
        auth.login(user)
        navigate(redirectPath,{replace:true})
    }
    return (
        <div>
            <label>UserName</label>
            <input type='text' value={user} onChange={e=>{setUser(e.target.value)}}/>
            <button onClick={handleLogin}>submit</button>
        </div>
    )
}
