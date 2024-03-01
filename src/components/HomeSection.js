import "./HomeSection.css";

const HomeSection = () => {
  return (
    <footer className="home-section">
      <div className="a-i-health-coach-header">
        <div className="ai-health-coach1">AI HEALTH COACH</div>
        <div className="b-m-i-frame">
          <div className="diet-plan-section">
            <div className="home-about-bmi-container">
              <p className="home2">Home</p>
              <p className="about1">About</p>
              <p className="bmi1">BMI</p>
              <p className="diet-plan1">Diet Plan</p>
            </div>
            <div className="contact-email-linkedin-container">
              <p className="contact1">Contact</p>
              <p className="email">Email</p>
              <p className="linkedin">LinkedIn</p>
              <p className="instagram">Instagram</p>
              <p className="twitter">Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeSection;
