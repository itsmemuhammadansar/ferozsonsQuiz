import React from 'react';
import '../../App.css';
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
  
    return (
      <div className="quiz-container">
        <div className="">
            <h1 style={{fontSize:"50px"}}>404 Page Not Found</h1>
            <p>Please Go to the Home, Click Home button</p>
            <button className="case-button" style={{marginTop:"0px"}} onClick={() => navigate("/")} >Back to Home</button>
          </div>
        </div>
    );
  };
  
  export default PageNotFound;