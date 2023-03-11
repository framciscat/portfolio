import React from 'react'
import './Services.css'
import Foco from '../img/foco.png';
import Computer from '../img/computer.png';
import Paint from '../img/paint.png';
import Card from './Card';
import Resume from './resume.pdf.pdf';

const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
        <div className="awesome">
        <span>Habilidades</span>
        <span>Técnicas</span>
        <span>A continuación puedes observar las tecnologías que manejo 
            actualmente
        </span>

        {/* Boton para descargar CV */}
        <a href={Resume} download> 
        <button className='button s-button'> Descargar CV</button>
        </a>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        {/* righ side  Primera CARD*/}
        <div className="cards">
            <div style ={{left: '14rem'}}>
                <Card 
                emoji = {Foco}
                heading = {'Design'}
                detail = {"Figma, Sketch, Photoshop, Adobe"}
                />
            </div>
            {/* Segunda CARD */}
            <div style= {{top: '12rem', left:'-4rem'}}>
              <Card
              emoji= {Computer}
              heading= {"Developer"}
              detail= {"Html, CSS, JavaScript, React"}
              />
            </div>
            {/* Tercera CARD */}
            <div style = {{top: '19rem', left: '12rem'}}>
              <Card
              emoji={Paint}
              heading={"UX/UI"}
              detail={"Hola amigos de youtube me gustan muchos los gatitos "}
              />
            </div>
            <div className='blur s-blur2' style={{background:"#EFCCDD"}}></div>
        </div>
    </div>
  )
}

export default Services