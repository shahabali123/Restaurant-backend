import React from 'react'
import {Link} from 'react-router-dom';
import {HiArrowNarrowRight} from 'react-icons/hi'

const NotFound = () => {
  return (
    <section className='notFound' id='notFound'>
        <div className="container">
        <img src="/notFound.svg" alt="Not Found" />
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>Back Home page <span><HiArrowNarrowRight/></span></Link>
        </div>
    </section>
  )
}

export default NotFound