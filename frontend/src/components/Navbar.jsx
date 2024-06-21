import React from 'react'
import { useState } from 'react'
import {Link} from 'react-scroll';
import {GiHamburgerMenu} from 'react-icons/gi';
import {data} from "../restApi.json"
 
const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
    <nav>
        <div className="logo">
            Khidmat Ghar
        </div>
        <div className={show ? 'navLinks showmenu': 'navLinks'}>
            <div className="links">
                {
                    data[0].navbarLinks.map(e=>{
                        return (
                            <Link 
                            key={e.id} 
                            to={e.link} 
                            spy={true} 
                            smooth={true}>
                                {e.title}
                            </Link>
                        )
                    })
                }
            </div>
            <button className="menuBtn" >
                <a href="#menu">OUR MENU</a>
            </button>
        </div>
        <div className="hamburger">
            <GiHamburgerMenu onClick={()=>setShow(!show)}/>
        </div>
    </nav>
  )
}

export default Navbar