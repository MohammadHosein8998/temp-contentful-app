import React from "react";
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful cms</h1>
          <p>
            'm baby raclette bruh forage XOXO knausgaard kitsch kinfolk
            live-edge pinterest ethical jawn neutra yes plz. Post-ironic pork
            belly disrupt gluten-free. Flexitarian food truck disrupt keffiyeh
            crucifix meh pabst venmo synth salvia shoreditch hexagon drinking
            vinegar succulents sriracha.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
