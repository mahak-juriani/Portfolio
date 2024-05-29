import React from 'react';
import './About.css';
import logo from '../logo.svg'
function About(){
  return (
    <div className='about'>
      <h1>About</h1>
      <div className='about-container'>
        <div className='about-item'>
          <p>This is where you can describe about yourself. The more you describe about yourself, the better it is!
            <br />
            <br />

            Extra Information about you, like hobbies and your goals.
            Example Paragraph: I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics. I soon became the go-to person for any design needs.</p>
        </div>
        <img src={logo} />
      </div>
    </div>
  );
};

export default About;
