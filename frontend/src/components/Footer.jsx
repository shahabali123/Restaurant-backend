import React from 'react'
import {Link} from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="banner">
                <div className="left">Khidmat Ghar</div>
                <div className="right">
                    <p>2024 All Rights Reserved &copy;</p>
                    <p>Oper: 05:00 PM to 12:00 AM</p>
                </div>
            </div>
            <div className="banner">
                <div className="left">
                    <Link to="https://github.com/shahabali123">Developed by Shahab Ali  <FaGithub />
                    </Link>
                </div>
                <div className="right">
                    <Link to='https://wa.me/971525827632'>WhatsApp <FaWhatsapp />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer