import React from 'react'
import './About.css'
import foto from '../../media/foto.png'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Acerca de mi</h3>
                <p><b><br></br>Estudié ingeniería de sistemas en Caracas, Venezuela, y me gradué en febrero del 2021. Al estar recién graduado tengo mucho animo por abrirme al mundo laborar como desarrollador web. <br></br><br></br>
	Entusiasta de nuevas tecnologías, curioso por naturaleza, habilidad para resolver problemas y con experiencia y capacidad de aprendizaje autónomo.</b> 
</p>
            </div>
            <div className="about-img">
                <img src={foto} alt="about"/>
            </div>
        </div>
    )
}

export default About
