import React from 'react'
import './Intro.css'
import Github from '../img/github.png'
import LinkedIn from '../img/linkedin.png'
import Instagram from '../img/instagram.png'
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import boy from "../img/boy.png";
import thumbup from "../img/thumbup.png";
import Crown from "../img/crown.png";
import FloatingDiv from './FloatingDiv'


const Intro = () => {


  return (
<div className="Intro" id="Intro">

    
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
        <span>¡Hola! Mi nombre es</span>
          <span>Francisca Madariaga</span>
          <span>
            Frontend Developer Junior en constante formación
          </span>
        </div>
      
          <button className="button i-button">Contacto</button>
       
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
      

            <div style={{top: '-4%', left: '68%'}}>
               <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
        
            <div style ={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1='Web ' txt2='Design'/>
            </div>
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <div className="blur" style={{background: '#c78bb5', top: '17rem', width: '21rem', height:'11rem', left:'-9rem'}}></div>
        </div>
        
    </div>
  )
}

export default Intro