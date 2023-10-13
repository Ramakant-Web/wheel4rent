import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import { IconChevronRight } from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Wide Selection of Quality Vehicles</h2>
                <p>
                We offer a diverse fleet of well-maintained vehicles,
                ranging from economical options to premium models, 
                ensuring there's a perfect ride for every occasion,
                With multiple convenient pick-up and drop-off locations,
                we make renting a car a hassle-free experience.
                Whether you're at the airport or in the heart of the city, 
                we're there for you.
                </p>
                <a href="#home">
                  Know More &nbsp;
                  <IconChevronRight />
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cross Country Drive</h4>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
