import React from "react";

const HeroSection=React.forwardRef((props,ref)=>{
    return (
        <section className="hero" ref={ref}>
            <div className="containerHero">
                <div className="containerDescription">
                    <p>Hey,I'm Hichem</p>
                    <h1>Full stack </h1>
                    <h1>Developer</h1>
                    <p id="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Dolorum, quas. Amet soluta assumenda cum?</p>
                    <button className="contactButton" id="heroButton">Get in touch</button>
                </div>
                <img src="./img/hero_img.png" alt="hero_img" className="heroImage"></img>     
            </div>
        </section>
    )
})
export default HeroSection;