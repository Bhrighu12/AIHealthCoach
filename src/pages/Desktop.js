import Mainframe from "../components/Mainframe";
import ObjectOther07Icon from "../components/ObjectOther07Icon";
import ObjectOther17Icon from "../components/ObjectOther17Icon";
import FrameComponent from "../components/FrameComponent";
import HomeSection from "../components/HomeSection";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <Mainframe />
      <section className="object-other-parent">
        <div className="frame-content-parent">
          <div className="frame-content">
            <h3 className="are-you-ready" id="about">
              Are you ready to embark on a journey to a healthier, fitter you?
              Look no further! Our cutting-edge AI-powered health coach is here
              to revolutionize your wellness experience. Say goodbye to generic
              advice and embrace a personalized approach tailored just for you.
            </h3>
          </div>
          <div className="wrapper-objectother-07">
            <ObjectOther07Icon />
          </div>
        </div>
      </section>
      <section className="why-choose-us">
        <div className="frame-group">
          <div className="objectother-17-wrapper">
            <ObjectOther17Icon />
          </div>
          <div className="why-choose-our-container">
            <p className="why-choose-our">
              Why Choose Our AI-Powered Health Coach?
            </p>
            <ul className="personalization-at-its-best-ta">
              <li className="personalization-at-its-best">
                <span>Personalization at Its Best</span>
              </li>
              <li className="tailored-workout-plans">
                <span>Tailored Workout Plans</span>
              </li>
              <li className="smart-dietary-recommendations">
                <span>Smart Dietary Recommendations</span>
              </li>
              <li className="real-time-progress-tracking">
                <span>Real-Time Progress Tracking</span>
              </li>
              <li>
                <span>User-Friendly Interface</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <FrameComponent />
      <HomeSection />
    </div>
  );
};

export default Desktop;
