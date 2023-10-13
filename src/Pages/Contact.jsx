import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IconLocation } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
              What truly stood out was their dedication to customer satisfaction.
               We had a small hiccup during our rental period, 
              and the customer support team was incredibly responsive and
               went above and beyond to resolve the issue promptly.
              </p>
              <a href="/">
                <IconPhone /> &nbsp; (+91) 2513 2546 25
              </a>
              <a href="/">
                <IconMail /> &nbsp; support@wheel4rent.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; Mumbai,India
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Aman Kumar"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(+91) 2513 2546 25</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
