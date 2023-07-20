import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FeaturedProducts } from './FeaturedProducts'
import { NewProducts } from './NewProducts'
export const Product = () => {
    return (
        <>
            <div>
                <input type='search' placeholder='Search Products' />
            </div>
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
            </nav>
            <Outlet/>
        </>
    )
}
