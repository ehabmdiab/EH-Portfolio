import React from "react";
import "./main.scss";
import img from "./image.jpg";
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="image">
        <img src={img} alt="ehab" />
      </div>
      <div className="text">
        <h1>
          hello, I'm Ehab.
          <br />
          web developer
        </h1>
      </div>
      <div className="button">
        <button>Download CV</button>
      </div>
    </section>
  );
};

export default Home;
