import "./ExerciseInfo.css";

const ExerciseInfo = () => {
  return (
    <header className="exercise-info">
      <img className="logo-icon2" loading="lazy" alt="" src="/logo@2x.png" />
      <div className="signup-section">
        <div className="about-frame">
          <div className="sign-up26">
            <div className="signup-frame1">
              <div className="about3"><a href="/">Home</a></div>
            </div>
          </div>
          <div className="sign-up27">
            <div className="bmi-container">
              <div className="bmi3"><a href="/bmi">BMI</a></div>
            </div>
          </div>
          <div className="signup-frames1">
            <div className="sign-up28">
              <div className="diet-plan2"><a href="/diet">Diets</a></div>
            </div>
          </div>
          <div className="signup-frames2">
            <div className="sign-up29">
              <div className="contact-container">
                <div className="contact3">Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ExerciseInfo;
