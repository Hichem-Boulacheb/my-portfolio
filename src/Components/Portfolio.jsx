import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons'
import CardProject from "./CardProject";
import data from "../data/skills.json";


const Portfolio=React.forwardRef((pros,ref)=>{
    return(
        <section className="portfolio" ref={ref}>
            <div className="title">
                <div>
                    <p>Recent Projects</p>
                    <h1>My Portfolio</h1>
                </div>
                <button id="githubBtn"><FontAwesomeIcon icon={faBasketball} className="icon"/>   Visit My GitHub</button>
            </div>
            <div className="projects">
                {data.portfolio.map((item,index)=>(<CardProject key={item.id} src={item.src} title={item.title} />))}
            </div>
             
        </section>
    )
})
export default Portfolio;