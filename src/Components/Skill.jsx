import React from "react";

export default function Skill(props){
    return(
        <div className="skill">
            <img src={props.src} alt="skill" />
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
        </div>
    )

}