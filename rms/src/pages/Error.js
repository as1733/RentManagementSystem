import React from 'react'
import { NavLink } from 'react-router-dom'
import './pages.css'


const Error = () => {
    return (
        <div className="not-found-1">
            <div className="not-found-2">
                <div className="not-found-404">
                    <h1>404</h1>
                </div>
                <h2>We are sorry, page not found!</h2>
                <p>
                    The page you are looking for is unavailable.
                </p>
                <NavLink to="/">
                    Back to Homepage
                </NavLink>
            </div>
        </div>
    )
}

export default Error
