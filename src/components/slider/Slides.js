  
import React from "react";
import "./Slider.css";
import cssimg from '../../media/cssicon.jpg'
import htmlimg from '../../media/htmlicon.png'
import jsimg from '../../media/jsicon.png'
import reactimg from '../../media/reacticon.png'

const slidesInfo = [
  {
    src:
      htmlimg,
    alt: "HTML",
    desc: "HTML",
  },
  {
    src:
      cssimg,
    alt: "CSS",
    desc: "CSS",
  },
  {
    src:
      jsimg,
    alt: "JavaScript",
    desc: "JavaScript",
  },
  {
    src:
      reactimg,
    alt: "React",
    desc: "React",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;