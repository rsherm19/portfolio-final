import { NavLink } from "react-router-dom"

import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav>
                <NavLink to="/"><p className="nav-link">Home</p></NavLink>
                <NavLink to="/about"><p className="nav-link">About</p></NavLink>
            </nav>
        </>
    )
}

export default Navbar