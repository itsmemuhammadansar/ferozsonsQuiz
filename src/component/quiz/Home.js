import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import logo from './quizLogo.jpg'
import Footer from './footer';


const Home = () => {
  const navigate=useNavigate();
  return (
    <div className='quiz-container' style={{margin:"0px"}}>
      <div className='content-container' >
      <img className='Logo-image' src={logo} alt="Logo" />
      {/* <h1>Welcome, Future Quiz Master!</h1> */}
        <h3>Ready to test your knowledge in a lightning-fast, 2-minute quiz?</h3>
        <button className="start-button" style={{margin:"0px"}} onClick={()=>navigate("/option")}>Get Started</button>
        <Footer/>
      </div>
      
    </div>
  );
};

export default Home;