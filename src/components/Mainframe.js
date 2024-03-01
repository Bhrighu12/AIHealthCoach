import "./Mainframe.css";

const Mainframe = () => {
  return (
    <section className="mainframe">
      <header className="mainframe-inner">
        <div className="ai-health-coach-parent">
          <h1 className="ai-health-coach">AI Health Coach</h1>
          <div className="contactdietplanframe">
            <div className="aboutframe">
              <div className="signupframe">
                <div className="about">{`About `}</div>
              </div>
              <div className="heropagecontainer">
                <div className="bmi">{`BMI `}</div>
              </div>
              <div className="contact">contact</div>
              <div className="diet-plan">Diet plan</div>
              <button className="sign-up14">
                <div className="readytoembracehealthiness">
                  <div className="sign-up15">Sign up</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="hero-page">
        <img
          className="pexels-tima-miroshnichenko-837-icon"
          alt=""
          src="/pexelstimamiroshnichenko8376171-1@2x.png"
        />
        <div className="welcome-to-your-container">
          <p className="welcome-to-your-ai-health-coac">
            <b className="welcome-to-your-ai-health-coac1">
              <span className="welcome-to-your">
                WELCOME TO YOUR AI HEALTH COACH
              </span>
            </b>
            <span className="span">
              <b className="b">{` `}</b>
              <span className="span1">
                <span className="span2">{`   `}</span>
              </span>
            </span>
          </p>
          <p className="unlock-your-full-potential-wit">
            <span className="unlock-your-full-potential-wit1">
              <span className="unlock-your-full-potential-wit2">
                <span>
                  Unlock Your Full Potential with Personalized Health and
                  Fitness Guidance
                </span>
              </span>
            </span>
          </p>
        </div>
        <div className="whatyougaintext">
          <div className="object-othercomponent">
            <button className="sign-up16">
              <div className="sign-up17">Sign up</div>
            </button>
            <button className="sign-up18">
              <div className="log-in">{`LOG IN `}</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainframe;
