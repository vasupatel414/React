import React from 'react'
import { useLocation } from 'react-router-dom';
import { blogs } from '../data/blogs';
export default function Blogdetailsx() {

let uselocation=useLocation();
let currentid=uselocation.pathname.split('/')[2]
console.log(currentid)
let currentdata=blogs.filter((v)=>v.id==currentid)[0]
    console.log(currentdata.title)
  return (
    <div>
        blogdetails
          <h1>{currentdata.title}</h1>
    </div>
  )
}
