import React from 'react'
import {Link} from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we are serious about is food.</p>
                </div>
                <p className="mid">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, sed. Consectetur praesentium consequuntur vero odio impedit sapiente sit hic ipsam non aliquam nesciunt fugiat voluptas tempora animi nobis, adipisci error eveniet repellat labore ea, iusto nisi. Necessitatibus, nisi nulla. Suscipit blanditiis ex qui ipsa, quaerat ut voluptate velit. Aliquam, atque.</p>
                <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span> </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About