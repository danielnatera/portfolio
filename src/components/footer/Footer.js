import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <h1>Luis Natera</h1>
                <p>Contacto: +56 9 6827 8750</p>
            </div>
            <div className="footer-contact">
                <h3>Contáctame</h3>
                <p>y comencemos a trabajar</p>
            </div>
            <div className="footer-sns">
                <div className="designed-by">
                    Diseñado por Luis Natera
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/luis-daniel-n-0a5845134/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
