import React from "react";
import {NavLink} from "react-router-dom";

export default function NavBar(props){

    

    function navLinkStyle({isActive}){
        return{
            color: isActive ? "#5e3bee" : "black",
            textDecoration: "none",
        }
    }
    return(
        <nav className="navBar">
            <ul className="navBarList">
                <img src="./img/logo.svg" alt="logo"/>
                <ul className="pageList">
                    <NavLink style={navLinkStyle} to="/" onClick={()=>props.scrollToRef("hero")}>Home</NavLink>
                    <NavLink style={navLinkStyle} to="/Myskills" onClick={()=>props.scrollToRef("mySkills")} >My Expertise</NavLink>
                    <NavLink style={navLinkStyle} to="/About" onClick={()=>props.scrollToRef("about")} >About me</NavLink>
                    <NavLink style={navLinkStyle} to="/Testimonials" onClick={()=>props.scrollToRef("portfolio")} >My projects</NavLink>
                </ul>            
                <button className="contactButton" onClick={()=>props.scrollToRef("contact")}>Contact Me </button>
            </ul>
        </nav>
        
    )
}