import React from "react";
import { useNavigate } from "react-router-dom";
import "./../../src/scenario.css";

const OptionName = (props) => {
  const navigate = useNavigate();

  return (
    <div className="quiz-container">
      <div className="">
        <h1  className="qheading"> PLEASE SELECT YOUR CASE </h1>
        <div style={{ width: "550px" }}>
          <button className="case-button" onClick={() => navigate("/Scenario1")}  >CASE 1</button>
          <button className="case-button" onClick={() => navigate("/ScenarioTow")}  > CASE 2 </button>
          <button className="case-button" onClick={() => navigate("/ScenarioTow")}>CASE 3</button>
          <button className="case-button">CASE 4</button>
          <button className="case-button">CASE 5</button>
          <button className="case-button">CASE 6</button>
        </div>
      </div>
    </div>
  );
};

export default OptionName;
