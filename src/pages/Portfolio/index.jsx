import React from "react";
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <section id="about" className="about">
      <PageHeader text="About Me" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
};

export default Portfolio;
