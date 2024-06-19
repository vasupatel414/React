import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <h1>Header</h1>
            <nav>
            <ul>
                    <li><Link to={'/'}>homex</Link></li>
                    <li><Link to={'/about-us'}>aboutx</Link></li>
                    <li><Link to={'/Course'}>coursex</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
            </nav>
        </div>
    )
}
