import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer(props){
    return(
        <footer>
            <ul className="navBarList" id="footerList">
                <img src="./img/logo.svg" alt="logo"/>
                <ul className="pageList">
                    <NavLink to="/" onClick={()=>props.scrollToRef("hero")}>Home</NavLink>
                    <NavLink to="/Myskills" onClick={()=>props.scrollToRef("mySkills")} >My Expertise</NavLink>
                    <NavLink to="/About" onClick={()=>props.scrollToRef("about")} >About me</NavLink>
                    <NavLink to="/Testimonials" onClick={()=>props.scrollToRef("portfolio")} >My projects</NavLink>
                </ul>    
                <div className="iconContainer">
                    <FontAwesomeIcon id="facebook" className="socialIcon" icon={faFacebook} />      
                    <div id="instgramContainer">
                        <FontAwesomeIcon id="instgram" className="socialIcon" icon={faInstagram} />
                    </div>
                    <FontAwesomeIcon id="twitter" className="socialIcon" icon={faTwitter} />
                    <FontAwesomeIcon id="linkedin" className="socialIcon" icon={faLinkedin} />
                </div>         
            </ul>
            <hr className="divider" />
            <div className="container">
                <p>Made with 💖 by Hichem</p>
                <div id="privacy">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
        </footer>
        

    )
}