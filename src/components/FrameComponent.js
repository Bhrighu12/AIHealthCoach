import ObjectOther18Icon from "./ObjectOther18Icon";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="mask-group-parent-wrapper">
      <div className="mask-group-parent">
        <div className="mask-group-parent-inner">
          <div className="benefits-list-parent">
            <div className="benefits-list">
              <div className="what-you-gain-container1">
                <p className="what-you-gain1">{`What you gain by living more healthily includes: `}</p>
                <ul className="feeling-better-mentally-regu2">
                  <li className="feeling-better-mentally-regu3">
                    <span className="feeling-better-mentally1">
                      feeling better mentally – regular exercise can lift your
                      mood and help you feel better
                    </span>
                  </li>
                  <li className="saving-money-eating-junk-foo1">
                    <span className="saving-money1">
                      saving money – eating junk food, smoking, and drinking
                      sugary drinks or alcohol are all expensive habits
                    </span>
                  </li>
                  <li className="fewer-health-problems-living1">
                    <span className="fewer-health-problems1">
                      fewer health problems – living a healthier lifestyle means
                      a lower risk of developing many illnesses
                    </span>
                  </li>
                  <li>
                    <span className="taking-control-of1">
                      taking control of your life – getting healthy helps you
                      feel in control of your life.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <ObjectOther18Icon />
          </div>
        </div>
        <div className="testimonials">
          <div className="testimonials-child" />
          <div className="testimonial-frame-parent">
            <div className="sign-up-section">
              <h2 className="testimonials1">testimonials</h2>
              <div className="log-in-c-t-a">
                <div className="read-what-others-have-container">
                  <p className="read-what-others">read what others</p>
                  <p className="have-to-say">have to say</p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="mask-group-icon"
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
          <img className="mask-group-icon1" alt="" src="/mask-group-1@2x.png" />
          <img className="mask-group-icon2" alt="" src="/mask-group-2@2x.png" />
          <div className="raj-p-u-j-a-section">
            <div className="frame-diet-plan-contact">
              <div className="julia-testimonial">
                <div className="julia-testimonial-child" />
                <div className="julia">JULIA</div>
                <div className="your-ai-powered-health1" id="review">
                  Your AI-Powered Health Coach website offers an impeccable user
                  experience, seamlessly blending sleek design with intuitive
                  navigation. The dashboard's real-time insights and adaptive
                  learning create a personalized journey. Responsive across
                  devices, the platform effortlessly transforms health tracking
                  into an engaging and insightful activity. A beacon of
                  simplicity and sophistication in digital wellness.
                </div>
              </div>
            </div>
            <div className="r-a-j-frame">
              <div className="r-a-j-frame-child" />
              <div className="raj">RAJ</div>
              <div className="your-ai-powered-health2">
                Your AI-Powered Health Coach website offers an impeccable user
                experience, seamlessly blending sleek design with intuitive
                navigation. The dashboard's real-time insights and adaptive
                learning create a personalized journey. Responsive across
                devices, the platform effortlessly transforms health tracking
                into an engaging and insightful activity. A beacon of simplicity
                and sophistication in digital wellness.
              </div>
            </div>
            <div className="r-a-j-frame1">
              <div className="r-a-j-frame-item" />
              <div className="puja-wrapper">
                <div className="puja">PUJA</div>
              </div>
              <div className="your-ai-powered-health3">
                Your AI-Powered Health Coach website offers an impeccable user
                experience, seamlessly blending sleek design with intuitive
                navigation. The dashboard's real-time insights and adaptive
                learning create a personalized journey. Responsive across
                devices, the platform effortlessly transforms health tracking
                into an engaging and insightful activity. A beacon of simplicity
                and sophistication in digital wellness.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
