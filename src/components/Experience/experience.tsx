import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Experience(){
  return(
    <Container id="experience">
      <h2>Work experience</h2>
      <h3 style={{margin: '20px'}}>Codelogicx Technologies Private Limited , Kolkata, West Bengal (March, 2021 - )</h3>
      <div className="projects">
        
      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </header>
          <div className="body">
            <h3>Mailwise</h3>
            <p>
            Mailwise is a website for email marketing, where the Aweber 3rd party api is used to get the emails like darft, schedule, sent. Here one user can login with aweber and can create and update broadcast(a email for sending many people at same time). An user can also set their days to schedule the broadcasts. Searching is also their to get any mail an user want to find.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Node JS</li>
              <li>Hapi JS</li>
              <li>Mysql</li>
              <li>Vue JS</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </header>
            <div className="body">
              <h3>Dalos</h3>
              <p>Dalos is an interactive and automated SaaS platform, Dalos gives the ability to retain and sustain your client base through streamlined automation and intelligent data analytics. This platform helps to stay on top of renewal schedules through simple automation that will track and notify you of upcoming contract deadlines. Improve customer experience to cultivate and nurture ongoing relationships with an easy-to-use customer portal.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>Node JS</li>
              <li>Hapi JS</li>
              <li>Postgres SQL</li>
              <li>React JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
        <h3 style={{margin: '20px'}}>Sibyl Infotech Pvt Ltd, Kolkata, West Bengal (August, 2020 to February, 2021)</h3>
      <div className="projects">
      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </header>
            <div className="body">
              <h3>Toolings ERP</h3>
              <p>Toolings ERP is software for tracking the various work details like sales details, user details, product details which helps the client to run his business smoothly. Accounts are also in the software which helps the client to generate some important details of his business.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>Node JS</li>
              <li>Mysql</li>
              <li>Angular 7</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>

      <h3 style={{margin: '20px'}}>WRC Technologies (P) Ltd, Kolkata, West Bengal (December, 2019 to June, 2020)</h3>

      <div className="projects">
      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </header>
            <div className="body">
              <h3>Toolings ERP</h3>
              <p>LegalKart is India’s first practice management app for lawyers. It comes with a minimalistic yet intuitive interface which helps lawyers manage their cases across all courts and legal forums across India. LegalKart App enables you to manage your law office directly from your mobile like team management, case finance management, client management and calendar. This App provides the additional assistance to lawyers in sending case related information and updates to their respective clients in real time. LegalKart helps you in simplifying the complex case updating processes and ensuring client satisfaction, without the hassle of e-mails & phone calls.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>Node JS</li>
              <li>Postgres SQL</li>
              <li>Angular 7</li>
              <li>Ionic 4</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}