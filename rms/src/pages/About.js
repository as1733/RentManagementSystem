import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <Container>
            <h1>About us</h1>
            <Link to='/' className='nav-link'>Home</Link>
        </Container>
    )
}
