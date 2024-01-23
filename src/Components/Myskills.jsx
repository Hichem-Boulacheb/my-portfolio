import React from "react";
import data from "../data/skills.json";
import Skill from "./Skill";

const Myskills=React.forwardRef((props,ref)=>{
    return (
        <section className="Myskills" ref={ref}>
            <div className="title">
                <h2>My skills</h2>
                <h1>My Expertise</h1>
            </div>          
            <div className="skills">
                {data.skills.map((item,index)=>
                    <Skill key={item.id} src={item.src} title={item.title} description={item.description} />
                )}
            </div>
        </section>
        
    )
})
export default Myskills;