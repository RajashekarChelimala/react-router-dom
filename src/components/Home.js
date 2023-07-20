import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>In Home Page</h1>
            <button onClick={()=>navigate('order-summary',{replace:true})}>Place Order</button>
        </div>
    )
}