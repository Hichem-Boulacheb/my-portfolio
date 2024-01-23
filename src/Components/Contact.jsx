import React from "react";

const Contact =React.forwardRef((props,ref)=>{
    return(
        <section className="contact" ref={ref}>
            <div className="contactTitle">
            <h3>Get In Touch</h3>
            <h1>Contact Me</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.</p>
            </div>
            <form>
                <div className="userInput">
                <label>
                    <span>First Name</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Last name</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" />
                </label>
                <label>
                    <span>phone-number</span>
                    <input type="number" />
                </label>
                <label id="message">
                    <span>Message</span>
                    <textarea placeholder="Type your message..." type="text" id="messageInput"/>
                </label>
                <label id="check">
                    <input type="checkbox" />
                    <span>I accept the terms</span>
                </label>    
            </div>
            <div id="containerButton">
                <button id="submitButton" className="contactButton" >Submit</button> 
            </div>
           
            </form>
            
        </section>
        
    )
});
export default Contact;