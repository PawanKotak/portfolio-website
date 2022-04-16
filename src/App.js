import logo from "./logo.svg";
import "./App.css";
import centerimage from "./assets/remy_unsplash.jpg";
import Slide from "react-reveal/Slide";
import react from "react";

import {
  FaGithub,
  FaTwitterSquare,
  FaLinkedin,
  FaJs,
  FaNode,
  FaCss3,
  FaReact,
  FaRegEnvelope,
} from "react-icons/fa";

function App() {
  const developerName = "Pawan Kotak";
  const developerSubTitle = "Frontend Developer /  Web Developer";
  const developerSkills = [
    <FaReact></FaReact>,
    <FaJs></FaJs>,
    <FaNode></FaNode>,
    <FaCss3></FaCss3>,
  ];
  const developerSocials = [
    { icon: <FaGithub></FaGithub>, href: "https://github.com/PawanKotak" },
    {
      icon: <FaLinkedin></FaLinkedin>,
      href: "https://www.linkedin.com/in/pawan-kotak-11538916/",
    },
    {
      icon: <FaTwitterSquare></FaTwitterSquare>,
      href: "https://twitter.com/pawan_kotak",
    },
    {
      icon: <FaRegEnvelope></FaRegEnvelope>,
      href: "mailto:kotakpawan@gmail.com",
    },
  ];

  return (
    <div className="App" style={{ backgroundImage: `url(${centerimage})` }}>
      <div className="Container">
        <header></header>
        <main>
          <Slide left>
            <section className="main-header">
              <div>
                <section>{developerName}</section>
              </div>
              <div className="subtitle">{developerSubTitle}</div>
            </section>
          </Slide>
          <section className="details">
            <Slide left>
              <h5>Skills</h5>
              <ul>
                {developerSkills.map((skill, index) => (
                  <li key={index} data-testid={`skill-test-id-${index}`}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Slide>
          </section>
          <section className="social-area">
            <Slide top>
              <ul>
                {developerSocials.map((social, index) => (
                  <li key={index} data-testid={`social-test-id-${index}`}>
                    <a href={social.href} target="_blank">
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </Slide>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
