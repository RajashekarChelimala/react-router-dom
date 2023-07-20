import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {
    const navStyleHeading = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    const auth = useAuth()
    return (
        <nav className='primary'>

            <NavLink to='/' style={navStyleHeading}>Home</NavLink>
            <NavLink to='/about' style={navStyleHeading}>About</NavLink>
            <NavLink to='/products' style={navStyleHeading}>Products</NavLink>
            <NavLink to='users' style={navStyleHeading}>Users</NavLink>
            <NavLink to='profile' style={navStyleHeading}>Profile</NavLink>
            {
                !auth.user && <NavLink to='/login' style={navStyleHeading}>Login</NavLink>
            }    
        </nav>
    )
}

//NavLink knows whether or not it is the active link. We can use it to style active link
//Special about NavLink is by default it receives active class when the link is the current route
//NavLink component will set a property called isActive which can be destructured from the function parameter.
//NavLink component is specifically meant for building components like NavBar, BreadCrumbs, or set of tabs where
//you would like to highlight the current selected item and provide useful context with screen readers.

//if you want to navigate two routes from other parts of the app, Link should be the component to use as you
//wouldn't want the active class applied when it is not needed