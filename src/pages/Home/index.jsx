import React from "react";
import "./main.scss";
import img from "./image.jpg";
import FileSaver from "file-saver";
import { Animate } from "react-simple-animate";

const Home = () => {
  const saveFile = () => {
    FileSaver.saveAs(process.env.PUBLIC_URL + "/Ehab.pdf", "Ehab.pdf");
  };

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
      <Animate
        play
        duration={1}
        start={{ transform: "translateY(50px)", opacity: 0 }}
        end={{ transform: "translateY(0px)", opacity: 1 }}
        delay={1}
      >
        <div className="button">
          <button onClick={saveFile}>Download CV</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
