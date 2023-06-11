import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import image from './images/profile.jpg';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggleSidebar = () => {
    setIsToggled(!isToggled);
  };

  const handleMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarOpen(false);
    if (isToggled) setIsSidebarOpen(true);
  };
  return (
    <>
      <section className="landing-page">
        <div className="name-div">
          <h1>Jesse Marino</h1>
          <p>Full Stack Developer</p>
        </div>
        <div className="image-div">
          <img className="image" src={image} alt="jess" />
        </div>
      </section>

      <section className="about-me-page">
        <h1>About Me</h1>
        <div className="about-me-content">
          <p className="about-me-p">
            My first coding experience was using Python to run automated
            performance verifications for calibration test equipment. It piqued
            my interest so much that I decided to attend a coding bootcamp and
            change my career path. I have experience building RESTful APIs with
            Node, Express, and Django. I'm comfortable with integrating APIs
            into the front end, making third-party API calls, and creating
            responsive UIs. Currently, one of my main interests has been in
            Web3. I have created smart contracts and decentralized applications
            (DApps) on the Ethereum blockchain using frameworks like Ethers.js,
            Solidity, and Hardhat.
          </p>

          <div className="tech-stack">
            <button
              className="sidebar-button"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={toggleSidebar}
            >
              See Tech Stack
            </button>
          </div>
        </div>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/jesswritincode/"
            className="linkedin"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              style={{ color: '#155fd5' }}
            />
          </a>
          <a href="https://github.com/justbytes" className="github">
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              style={{ color: '#000000' }}
            />
          </a>
        </div>
        <div className="sidebar-container">
          <div className={`sidebar ${isSidebarOpen ? 'show' : 'hidden'}`}>
            <div className="sidebar-content">
              <h2>Tech Stack</h2>
              <h3>Front End</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>jQuery</li>
                <li>React.js</li>
                <li>Handlebars.js</li>
                <li>Bootstrap</li>
              </ul>
              <h3>Back End</h3>
              <ul>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Sequelize</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Python</li>
                <li>Django</li>
                <li>Flask</li>
                <li>Solidity</li>
                <li>Ethers.js</li>
                <li>Hardhat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-page">
        <h1>Projects</h1>
      </section>
    </>
  );
}

export default App;
