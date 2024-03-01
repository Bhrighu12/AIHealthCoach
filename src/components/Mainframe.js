import React, { useEffect } from 'react';
import "./Mainframe.css";

const Mainframe = () => {
  useEffect(() => {
    // Create the script element for chatbot
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;

    // Set the config as a global variable
    window.embeddedChatbotConfig = {
      chatbotId: "EHax4a-WpWRgxhv9_0zsX",
      domain: "www.chatbase.co"
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section className="mainframe">
      <header className="mainframe-inner">
        <div className="ai-health-coach-parent">
          <img src="logo@2x.png" height={100} width={500}></img>
          <div className="contactdietplanframe">
            <div className="aboutframe">
              <div className="signupframe">
                <div className="about"><a href="#about" >Why us?</a></div>
              </div>
              <div className="sign-up14">
                <div className="sign-up15"><a href="/bmi">BMI</a></div>
              </div>
              <div className="contact"><a href="#cont" >Contact</a></div>
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
              <div className="sign-up17">{`SIGN UP`}</div>
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
