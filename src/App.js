import react from 'react';
import './App.css';

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
        <div>
          <h1>About Me</h1>
          <p>yatyatayatyatyatyaytyatyaytyatyaytyatyaytyatyaytyaytyatyaytyaty</p>
        </div>
      </section>
      <section className="projects-page">
        <h1>Projects</h1>
      </section>
    </>
  );
}

export default App;
