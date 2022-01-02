import {Container} from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";

export function Footer(){
  return(
    <Container className="footer">
      <a href="/" className="logo">
        <span>A </span>
        <span>Maji</span>
      </a>
      <div>
        <p>This site was made with a <img src={reactIcon} alt="React"/> a lot <span>❤️</span></p>
      </div>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/arpan-maji-59579b147/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/arpan8" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

      </div>
      
    </Container>
  )
}