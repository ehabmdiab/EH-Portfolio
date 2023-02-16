import React from "react";
import PageHeader from "../../components/pageHeader";
import { GiSkills } from "react-icons/gi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiRedux,
  SiDotnet,
  SiMongodb,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { Animate } from "react-simple-animate";
import "./main.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeader text="My Skills" icon={<GiSkills size={40} />} />
      <div className="content">
        <div className="front-end">
          <h2>FRONT END</h2>
          {/*  */}
          <Animate
            play
            start={{
              opacity: 0,
              transform: "translateX(-200px)",
              width: "100%",
            }}
            end={{ opacity: 1, transform: "translateX(0px)", width: "100%" }}
            duration={1}
            delay={0.5}
          >
            {/*  */}
            <div className="icons">
              <SiHtml5 size={60} color="var(--yellow-theme-main-color)" />
              <SiCss3 size={60} color="var(--yellow-theme-main-color)" />
              <SiJavascript size={60} color="var(--yellow-theme-main-color)" />
              <SiReact size={60} color="var(--yellow-theme-main-color)" />
              <SiBootstrap size={60} color="var(--yellow-theme-main-color)" />
              <SiRedux size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </Animate>
        </div>
        <div className="back-end">
          <h2>BACK END</h2>
          <Animate
            play
            start={{
              opacity: 0,
              transform: "translateY(800px)",
              width: "100%",
            }}
            end={{ opacity: 1, transform: "translateY(0px)", width: "100%" }}
            duration={1}
            delay={0.5}
          >
            <div className="icons">
              <SiDotnet size={60} color="var(--yellow-theme-main-color)" />
              <DiNodejs size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </Animate>
        </div>
        <div className="database">
          <h2>DATABASE</h2>
          <Animate
            play
            start={{
              opacity: 0,
              transform: "translateX(200px)",
              width: "100%",
            }}
            end={{ opacity: 1, transform: "translateX(0px)", width: "100%" }}
            duration={1}
            delay={0.5}
          >
            <div className="icons">
              <SiMicrosoftsqlserver
                size={60}
                color="var(--yellow-theme-main-color)"
              />
              <SiMongodb size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Skills;
