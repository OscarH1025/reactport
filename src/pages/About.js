import React from 'react';
import '../css/about.css';


function About() {
    return (
        <div>
            <section id="aboutme">
                <section className='profile-pic'>
                    <img src={require(`../assets/images/Oscar.jpeg`)} alt="/" />
                    
                </section>  
                <h2 className='section-title'>About Me</h2>
                <p className='aboutme-info'>
                    Hello, I am Oscar Hurtado.
                    <br/>
                    <br/>
                    I’m an fullstack bootcamp student. 
                    <br/> 
                    <br/>   
                    I'm twenty years old I'm currently doing two different careers at the same time as I'm attending a coding Bootcamp and getting a degree in Nursing. My passion for programming began during senior year of high school when I took an intro CS course to fulfill a math credit that I needed to graduate. To my surprise, I found that I enjoyed coding and now I'm working to sharp my skills.
                </p>
            </section>
        </div>
    )
}

export default About;