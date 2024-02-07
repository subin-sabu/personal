import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Services() {
    return (
        <div>
            <ul className='nav-select'>
                <li><Link to='static' className='static'>Static Websites</Link></li>
                <li><Link to='dynamic'>Dynamic Websites</Link></li>
            </ul>
            <div>

                <Outlet/>

            </div>
        </div>
    )
}

export default Services