import "./DietInfoText.css";

const DietInfoText = () => {
  return (
    <header className="diet-info-text">
      <div className="main-frame">
        <img className="logo-icon1" loading="lazy" alt="" src="/logo@2x.png" />
        <div className="signup-frames">
          <div className="signup-links">
            <div className="sign-up21">
              <div className="about2"><a href="/">Home</a></div>
            </div>
            <div className="sign-up22">
              <div className="bmi2"><a href="/bmi">BMI</a></div>
            </div>
            <div className="sign-up23">
              <div className="contact2">Contact</div>
            </div>
            <button className="sign-up24">
              <div className="sign-up-wrapper">
                <div className="sign-up25">Sign up</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DietInfoText;
