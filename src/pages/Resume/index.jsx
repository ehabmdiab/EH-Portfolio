import React from "react";
import PageHeader from "../../components/pageHeader";
import { ImProfile } from "react-icons/im";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./main.scss";
import { MdWork } from "react-icons/md";

const Resume = () => {
  const education = [
    {
      title: "ITI 9 month Diploma",
      subtitle: "Professional Web Development and BI ",
      description: "from 2021 to 2022",
    },
    {
      title: "bachelor of Commerce",
      subtitle: "from University of Alexandria,Egypt . Accounting Major",
      description: "from 2017 to 2021",
    },
  ];
  return (
    <section id="resume" className="resume">
      <PageHeader text="Resume" icon={<ImProfile size={40} />} />
      <div className="timeline">
        <div className="timeline__education">
          <h3 className="timeline__education__header">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__education__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>

                  <h4>{item.subtitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}{" "}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
