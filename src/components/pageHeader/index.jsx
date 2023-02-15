import React from "react";
import "./main.scss";

const PageHeader = (props) => {
  const { text, icon } = props; //destructing props object
  return (
    <div className="page-header">
      <h2>{text}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeader;
