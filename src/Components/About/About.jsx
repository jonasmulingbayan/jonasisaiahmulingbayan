import React from 'react'
import './About.css'
import jonas from '../../assets/jonas-pajah.jpg'
import theme_patern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id = "about" className='about sections'>
        <div className="about-title">
            <h1>Who am I?</h1>
            <img src = {theme_patern} alt = ""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src ={jonas} alt = ""/>
            </div>
            <div className="about-right">
                <div className="about-paragraph">
                <h3 className = "for-labels">Programmer &amp; Web Developer/Web Designer.</h3>
                    <p className="fst-italic"> A Programmer / Web Developer who is passionate about building the User Interface of Website and Web Applications.</p>

                    <p>I have a degree in Information Technology and a strong interest in Front-End Web Development.</p>
                    <p>I love seeing web designs and feel excited about building and turning them into a real website.
                    My passion and interest in Web Development, especially in the Front-End makes me build my own personal website. Currently, I'm looking for an opportunity where I can use the skills that I'm passionate about.
                    </p>
                </div>

                <div className='about-informations'>
                    <div className="information">
                        <ul>
                            <li><strong>Birthday:</strong> <span>18 November 1995</span></li>
                            <li><strong>Website:</strong> <span>https://jonasmulingbayan.netlify.app/</span></li>
                            <li><strong>City:</strong> <span>Bacoor City, Cavite</span></li>
                            <li><strong>Email:</strong> <span>jonasmulingbayan@gmail.com</span></li>
                        </ul>
                        <ul>
                            <li><strong>Age:</strong> <span>28</span></li>
                            <li><strong>Degree:</strong> <span>Bachelors</span></li>
                            <li><strong>Freelance:</strong> <span>Available</span></li>
                        </ul>
                    </div>
                </div>

                {/*<div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>PHP</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Bootstrap</p><hr style={{width:"85%"}}/></div>
                </div>*/}
               
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>

            <div className="about-achievement">
                <h1>11+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>

            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
