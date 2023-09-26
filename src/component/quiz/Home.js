import React from 'react';
import '../../App.css';
import companyLogos from '../../asset/Photo/companyLogos.png'
import { useNavigate } from 'react-router-dom';
import compaignLog from '../../asset/Photo/compaignLog.png'


const Home = () => {
  const navigate=useNavigate();
  return (
    <div className='' style={{margin:"0px", marginTop:"10px"}}>
      <img className='Logo-image' src={compaignLog} alt="compaign Logo" />
        <h3>Ready to test your knowledge in a lightning-fast, 2-minute quiz?</h3>
        <button className="start-button" style={{margin:"0px"}} onClick={()=>navigate("/option")}>Get Started</button>
        
        {/* <Footer/> */}
      <img style={{width: "1330px"}} src={companyLogos} alt='companyLogos logo'/>
    </div>
  );
};

export default Home;