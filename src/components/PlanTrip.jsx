import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plannig to go somewher</h3>
              <h2>Try our easy car rental</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Choose Car</h3>
                <p>
                  We have wide range of car collection,
                  which surely give you enjoynment while trip
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contact Our Team</h3>
                <p>
                  If you have any quetions our team members surely solve your questions
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Just Drive</h3>
                <p>
                  Go without any hegitetion we've got you covered
                  with insurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
