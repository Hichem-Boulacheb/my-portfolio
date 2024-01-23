import React,{useState,useRef,useEffect} from "react";
import NavBar from "./NavBar";
import "../App.css"
import HeroSection from "./HeroSection";
import Myskills from "./Myskills";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";


function App(){
    const [active,setActive]=useState({
        hero : false,
        mySkills: false,
        about:false,
        portfolio:false,
        contact:false,
    })
    const sectionRefs={
        hero : useRef(null),
        mySkills: useRef(null),
        about: useRef(null),
        portfolio: useRef(null),
        contact: useRef(null),
    }

    
    
    
    function scrollToRef(refName){
        const sectionRef=sectionRefs[refName];
        if(sectionRef && sectionRef.current){
            sectionRef.current.scrollIntoView({
                behavior:"smooth"
            })
        }
    }
    return (
        <div className="container">
            <NavBar scrollToRef={scrollToRef}  ></NavBar>
            <HeroSection ref={sectionRefs.hero}></HeroSection>
            <Myskills ref={sectionRefs.mySkills}></Myskills>
            <About ref={sectionRefs.about}></About>
            <Portfolio ref={sectionRefs.portfolio}></Portfolio>
            <Contact ref={sectionRefs.contact}></Contact>
            <Footer scrollToRef={scrollToRef}></Footer>
        </div>   
        
    )
}
export default App;