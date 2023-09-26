import React from 'react';
import '../../../src/scenario.css';
import fersozsons from '../../asset/Photo/fersozsons.jpg';
import novapressin from '../../asset/Photo/novapressin.jpg';
import protectis from '../../asset/Photo/protectis.jpg';
import rifaxa from '../../asset/Photo/rifaxa.jpg';
import dexiva from '../../asset/Photo/dexiva.jpg';



function Footer () {
    return (
        <footer className="footer" style={{position:"fixed"}}> 
          <img className='image' src={rifaxa} alt='rifaxa logo'/>
          <img className='image' src={novapressin} alt='novapressin logo'/>  
          <img className='image' src={fersozsons} alt='Ferozson logo'/>
          <img className='image' src={dexiva} alt='dexiva logo'/>
          <img className='image' src={protectis} alt='protectis logo'/>
            {/* Add your social icons here
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a> */}
        </footer>
      );
  };
export default Footer;