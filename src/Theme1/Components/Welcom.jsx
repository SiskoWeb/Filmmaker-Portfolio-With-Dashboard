import React from 'react'
import { Link } from 'react-router-dom'
import '../style/welcom.css'

export default function Welcom() {

  // <h1 className='animate__animated animate__zoomIn'>Noaman el garrab</h1>

  // <div className='btnWelecom animate__animated animate__zoomIn'> 
  // <button className='Photos' ><a href='#Photos'>Photography</a></button>
  // <button className='Videos'><a  href='#Videos'>Filmmaking</a></button>

  // </div>
  return (
    
  <section className='seactin-welcom ' id='Home'>  

  <div className="btn-welecom">
  <Link to='/Videos'>Filmmaking</Link>
  <Link  to='/Photos'>Photos</Link>
  </div>
<div className='handwrite'> <p className='animate__animated animate__zoomIn'>Noaman El garrab</p></div>
 

  
  </section>
  )
}
