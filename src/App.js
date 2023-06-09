import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faReact,
  faNode,
  faPython,
  faBootstrap,
  faJs,
  faHtml5,
  faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import image from './images/profile.jpg';

function App() {
  return (
    <>
      <section className="landing-page">
        <div className="name-div">
          <h1>Jesse Marino</h1>
          <p>Full-Stack Developer</p>
        </div>
        <div className="image-div">
          <img className="image" src={image} alt="jess" />
        </div>
      </section>

      <section className="about-me-page ">
        <h1>About Me</h1>
        <div className="about-me-content">
          <p className="about-me-p">
            My first coding experience was using Python to run automated
            performance verifications for calibration test equipment. It piqued
            my interest so much that I decided to attend a coding bootcamp and
            change my career path. I have experience building RESTful APIs with
            Node, Express, and Django. I'm comfortable with integrating APIs
            into the frontend, making third-party API calls, and creating
            responsive UIs. Currently, one of my main interests has been in
            Web3. I have created smart contracts and decentralized applications
            (DApps) on the Ethereum blockchain using frameworks like Ethers.js,
            Solidity, and Hardhat.
          </p>

          <div className="tech-stack">
            <FontAwesomeIcon
              icon={faHtml5}
              size="2xl"
              style={{ color: '#ff5900' }}
            />
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="2xl"
              style={{ color: '#1868f2' }}
            />
            <FontAwesomeIcon
              icon={faJs}
              size="2xl"
              style={{ color: '#ecf005' }}
            />
            <FontAwesomeIcon
              icon={faPython}
              size="2xl"
              style={{ color: '#b1c421' }}
            />
            <FontAwesomeIcon
              icon={faReact}
              size="2xl"
              style={{ color: '#2ab2df' }}
            />
            <FontAwesomeIcon
              icon={faNode}
              size="2xl"
              style={{ color: '#2a933b' }}
            />

            <FontAwesomeIcon
              icon={faBootstrap}
              size="2xl"
              style={{ color: '#821fb7' }}
            />
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
      </section>
      <section className="projects-page">
        <h1>Projects</h1>
      </section>
    </>
  );
}

export default App;
