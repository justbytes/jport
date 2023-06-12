import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faVideo } from '@fortawesome/free-solid-svg-icons';

// Import images
import image from './images/profile.jpg';
import pyTodo from './images/pyTodo.png';
import NFTGenie from './images/NFTGenie.png';
import cForm from './images/cform.png';
import CombinedProjects from './images/CombinedProjects.png';

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
          <h1 className="name">JESSE MARINO</h1>
          <p className="title">Full Stack Developer</p>
        </div>
        <div className="image-div">
          <img className="image" src={image} alt="jess" />
        </div>
      </section>

      <section className="about-me-page">
        <h1 className="page-title">About Me</h1>
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
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-page">
        <h1 className="project-h1">Projects</h1>
        <div className="project-container">
          <div className="project-wrapper">
            <div className="project">
              <div className="project-image-container">
                <img className="project-image" src={NFTGenie} alt="project" />
              </div>
              <div className="project-info">
                <h3>NFT Genie</h3>
                <div className="project-description">
                  <p>
                    NFT Genie is a DApp that uses the Stable Diffustion
                    text-to-image generator to generate images which are then
                    saved to the IPFS via NFT.Storage and minted into NFT's on
                    the Ethereum blockchain.
                  </p>
                  <h4>Tech Stack</h4>
                  <p className="techStack">
                    JavaScript, React, Solidity, Hardhat, Ethers.js, Netlify
                  </p>
                </div>
                <div className="project-links">
                  <a
                    href="https://thunderous-truffle-69f5c3.netlify.app/"
                    className="github"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      size="lg"
                      style={{ color: '#000000' }}
                      className="falink-link"
                    />
                    <span className="link-text"> Visit Site</span>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1pCcHuCx2lBOBwWk6IrunfEwTOVO9Tjas/view"
                    className="github"
                  >
                    <FontAwesomeIcon
                      icon={faVideo}
                      size="lg"
                      style={{ color: '#000000' }}
                      className="falink-video"
                    />
                    <span className="link-text"> Video Demonstration</span>
                  </a>
                  <a
                    href="https://github.com/justbytes/ai-nft-minter"
                    className="github"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      style={{ color: '#000000' }}
                    />
                    <span className="link-text"> Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrapper">
            <div className="project">
              <div className="project-image-container">
                <img className="project-image" src={cForm} alt="project" />
              </div>
              <div className="project-info">
                <h3>cForm</h3>
                <div className="project-description">
                  <p>
                    cForm is a full-stack social media style application. It is
                    a form where users can post about and watch the latest
                    cryptocurrencies. This app uses the CoinMarketCap API to
                    pull the latest data for the top performers.
                  </p>
                  <h4>Tech Stack</h4>
                  <p className="techStack">
                    JavaScript, Node, Express, Sequelize, MySQL, React, Heroku
                  </p>
                </div>
                <div className="project-links">
                  <a href="https://cform.herokuapp.com/" className="github">
                    <FontAwesomeIcon
                      icon={faLink}
                      size="lg"
                      style={{ color: '#000000' }}
                      className="falink-link"
                    />
                    <span className="link-text"> Visit Site</span>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1kLNRmyx561CvQqdUdpPvW2A4GpPz2l4u/view"
                    className="github"
                  >
                    <FontAwesomeIcon
                      icon={faVideo}
                      size="lg"
                      style={{ color: '#000000' }}
                      className="falink-video"
                    />
                    <span className="link-text"> Video Demonstration</span>
                  </a>
                  <a
                    href="https://github.com/justbytes/cform"
                    className="github"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      style={{ color: '#000000' }}
                    />
                    <span className="link-text"> Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrapper">
            <div className="project">
              <div className="project-image-container">
                <img
                  className="project-image"
                  src={CombinedProjects}
                  alt="project"
                />
              </div>
              <div className="project-info">
                <h3>Combined Projects</h3>
                <div className="project-description">
                  <p>
                    This application is a combination of all the projects from
                    my coding bootcamp in one React app. The projects include a
                    Password Generator, Workday Scheduler, Weather Forecast, and
                    a React Quiz.
                  </p>
                  <h4>Tech Stack</h4>
                  <p className="techStack">
                    JavaScript, React, Moment.js, Netlify
                  </p>
                </div>
                <div className="project-links">
                  <a
                    href="https://shiny-entremet-836cde.netlify.app/"
                    className="github"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      size="lg"
                      style={{ color: '#000000' }}
                      className="falink-link"
                    />
                    <span className="link-text"> Visit Site</span>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1XAuS9MhJA5ZMQX-Ovum9VLE4BX2aGWeO/view"
                    className="github"
                  >
                    <FontAwesomeIcon
                      icon={faVideo}
                      size="lg"
                      style={{ color: '#000000' }}
                      className="falink-video"
                    />
                    <span className="link-text"> Video Demonstration</span>
                  </a>
                  <a
                    href="https://github.com/justbytes/combined-projects"
                    className="github"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      style={{ color: '#000000' }}
                    />
                    <span className="link-text"> Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrapper">
            <div className="project">
              <div className="project-image-container">
                <img className="project-image" src={pyTodo} alt="project" />
              </div>
              <div className="project-info">
                <h3>pyTODO</h3>
                <div className="project-description">
                  <p>
                    A full-stack application that uses CRUD operations to manage
                    incomplete and complete tasks.
                  </p>
                  <h4>Tech Stack</h4>
                  <p className="techStack">
                    Python, Django, JavaScript, React, Heroku
                  </p>
                </div>
                <div className="project-links">
                  <a
                    href="https://python-todo.herokuapp.com/"
                    className="github"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      size="lg"
                      style={{ color: '#000000' }}
                      className="falink-link"
                    />
                    <span className="link-text"> Visit Site</span>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/16PrmfLeXuk-3szxLPumuJCo22GzG4C1V/view"
                    className="github"
                  >
                    <FontAwesomeIcon
                      icon={faVideo}
                      size="lg"
                      className="falink-video"
                    />
                    <span className="link-text"> Video Demonstration</span>
                  </a>
                  <a
                    href="https://github.com/justbytes/py-todo"
                    className="github"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      style={{ color: '#000000' }}
                    />
                    <span className="link-text"> Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2023 All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
