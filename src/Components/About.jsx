import React from "react";
// import ScrollObserver from "./ScrollObserver";

const About= React.forwardRef((props,ref)=>{
    
        return(
            <section className="aboutMe" ref={ref}>
               <img src="./img/about-me.png" alt="aboutImage" />
                <div className="aboutDescription">
                    <h3>About</h3>
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis sit debitis omnis harum sed veniam quasi dicta accusamus recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam tempora numquam sint odit optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis sit debitis omnis harum sed veniam quasi dicta accusamus recusandae?</p>
                </div> 
            </section>
            
        )
});
export default About;