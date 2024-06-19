import React from 'react'
import Header from '../commo/Header'
import { blogs } from '../data/blogs'
import { Link } from 'react-router-dom'
export default function Blog() {
    let allblogs = blogs.map((v, i) => {
        return (
            <div className='blogitems' key={i}>
                <h1>{v.title}</h1>
                <p> {v.body}
                </p>
               
                <div style={{ textAlign: 'center' }} >
                    <button ><Link to={`/blog/${v.id}`}>read more</Link></button>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div>Blog </div>
            <Header></Header>
            <div className='container'>
                {allblogs}
            </div>
        </div>
    )
}
