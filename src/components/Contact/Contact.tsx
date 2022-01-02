import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
// import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Get in touch with me</h2>
        <p>If you've seen my potential or want to talk to me, don't hesitate to text me.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:arpanmajibally@gmail.com">arpanmajibally@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+917044970070">(91) 7044970070</a>
        </div>  
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}