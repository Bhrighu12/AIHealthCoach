import "./HomeSection.css";

const HomeSection = () => {
  return (
    <footer className="home-section" id="cont">
      <div className="a-i-health-coach-header">
        <div className="ai-health-coach1">AI HEALTH COACH</div>
        <div className="b-m-i-frame">
          <div className="diet-plan-section">
            <div className="home-about-bmi-container">
              <p className="home2"><a href="/">Home</a></p>
              <p className="about1"><a href="#about">About</a></p>
              <p className="bmi1"><a href="/bmi">BMI</a></p>
              <p className="diet-plan1"><a href="/diet">Diets</a></p>
              <p className="bmi1"><a href="/exercise">Exercises</a></p>
            </div>
            <div className="contact-email-linkedin-container">
              <p className="contact1">Contact</p>
              <p className="email">Email : aihealhtcoach@gmail.com</p>
              <p className="linkedin">LinkedIn : AIHealthCoach</p>
              <p className="instagram">Instagram : @ai_healthcoach</p>
              <p className="twitter">Twitter : @ai_healthcoach</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeSection;
