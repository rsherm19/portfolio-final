import { NavLink } from "react-router-dom"

import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav>
                <NavLink to="/"><p>Home</p></NavLink>
                <NavLink to="/about"><p>About</p></NavLink>
            </nav>
        </>
    )
}

export default Navbar