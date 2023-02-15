import React from "react";
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./main.scss";
import { DiReact, DiNodejs } from "react-icons/di";
import { SiDotnet, SiMongodb } from "react-icons/si";

const About = () => {
  const p = `I'm Ehab Mostafa. Creative Web Developer. I describe myself as an
  emotional developer who loves coding, open-source, and the web
  platform. I use HTML, CSS, and JavaScript to produce responsive
  websites and web apps that provide users the best experience suited to
  their device and browser. I write standards-based code that is
  semantic, accessible, search-engine friendly, easy to maintain,
  cross-browser compatible, and performant.`;

  const ulItems = [
    {
      label: "Name",
      value: "Ehab Mostafa",
    },
    {
      label: "Age",
      value: "23",
    },
    {
      label: "Address",
      value: "Alexandria, Egypt",
    },
    {
      label: "Email",
      value: "ehabmodiab@gmail.com",
    },
    {
      label: "Phone",
      value: "01154753220",
    },
  ];

  return (
    <section id="about" className="about">
      <PageHeader text="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personal">
          <Animate
            play
            start={{ opacity: 0, transform: "translateX(-900px)" }}
            end={{ opacity: 1, transform: "translateX(0)" }}
            duration={1.5}
            delay={0.5}
          >
            <h3>Web Developer</h3>
            <p>{p}</p>
          </Animate>
          <Animate
            play
            start={{ opacity: 0, transform: "translateX(500px)" }}
            end={{ opacity: 1, transform: "translateX(0)" }}
            duration={1.5}
            delay={0.5}
          >
            <h3 className="personalh3">Personal Information</h3>
            <ul>
              {ulItems.map((item, index) => {
                return (
                  <li key={index}>
                    <span className="title">{item.label}:</span>
                    <span className="value">{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </Animate>
        </div>
        {/* end */}
        <div className="about__content__services">
          <Animate
            play
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0)" }}
            duration={1.5}
            delay={0.5}
          >
            <div className="about__content__services__content">
              <div>
                <SiDotnet size={80} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiNodejs size={80} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiReact size={80} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <SiMongodb size={80} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
