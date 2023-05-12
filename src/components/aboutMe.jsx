import React, {Component} from 'react';
import profilePic from '../img/profile.jpg';
import HTMLLogo from '../img/HTML5.png';
import CSSLogo from '../img/CSS3.png';
import JSLogo from '../img/JS.png';
import PHPLogo from '../img/PHP.png';
import ReactLogo from '../img/React.png';

// A class to show my CV
class AboutMe extends Component {
    state = {  }

    // Render the component so the user can see it
    render() {
        return(
            <div className='App'>
                <div className='about-me'>
                    <img src={profilePic} className='profile-pic' alt="My profile" />
                </div>

                <div className='title'>
                    Non-specialized Developer
                </div>
                <section>
                    <p>
                        Hi, I'm Dufour Jordan. I'm still learning things.
                    </p>
                    <p>
                        I have basic knowledge on many languages like :
                    </p>
                    <div className='stacks'>
                        <img src={HTMLLogo} className='tech-logo' alt="HTML Logo" />
                        <img src={CSSLogo} className='tech-logo' alt="CSS Logo" />
                        <img src={JSLogo} className='tech-logo' alt="Javascript Logo" />
                        <img src={PHPLogo} className='tech-logo' alt="PHP Logo" />
                        <img src={ReactLogo} className='tech-logo' alt="React Logo" />
                    </div>
                </section>
            </div>
        );
    }
}

// We export it so we can use it on other components/pages like App.js
export default AboutMe;