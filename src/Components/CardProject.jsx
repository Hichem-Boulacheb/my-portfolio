import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function CardProject(props){
    return(
        <div className="project">
            <img src={props.src} alt="project" />
            <div className="projectDescription">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
                {/* <a>View in GitHub  <FontAwesomeIcon icon={faArrowRight} className="icon" /></a> */}
                <a href="" style={{textDecoration:"none",color:"black"}}>View in GitHub <FontAwesomeIcon icon={faArrowRight} className="icon" /> </a>
            </div>
        </div>
    )
}