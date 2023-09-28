import React from "react";
import { useNavigate } from "react-router-dom";
import "./../../src/scenario.css";
import compaignLog from './../asset/Photo/compaignLog.png';
import companyLogos from './../asset/Photo/companyLogos.png';

const OptionName = (props) => {
  const navigate = useNavigate();

  return (
    <div>
     <img className='Logo-image' style={{width:"540px"}} src={compaignLog} alt="compaign Logo" />
    <div className="quiz-container" style={{marginTop:"21px", margin:"60px auto 0 auto"}}>
      <div className="">
        <h1  className="qheading"> PLEASE SELECT YOUR CASE </h1>
        <div style={{ width: "550px" }}>
          <button className="case-button" onClick={() => navigate("/scenarioOne")}     >CASE 1</button>
          <button className="case-button" onClick={() => navigate("/scenarioTwo")}   >CASE 2 </button>
          <button className="case-button" onClick={() => navigate("/scenarioThree")} >CASE 3</button>
          <button className="case-button" onClick={() => navigate("/scenarioFour")} >CASE 4</button>
          <button className="case-button" onClick={() => navigate("/scenarioFive")} >CASE 5</button>
          <button className="case-button" onClick={() => navigate("/scenarioSix")}  >CASE 6</button>
        </div>
      </div>
    </div>
    <img style={{ maxWidth: "100%", height: "auto", marginTop:"150px" }} src={companyLogos} alt='companyLogos logo'/>
    </div>
  );
};

export default OptionName;
