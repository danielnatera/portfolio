import React, {useState, useEffect} from 'react'
import './App.css'
import Cover from './components/components-cover/Cover'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Slider from './components/slider/Slider'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'

function App() {

    // useState to record the scroll position
    const [scrollHeight, setScrollHeight] = useState(0)

    // Function that returns the number of pixels the document has currently scrolled along the vertical axis 
    const handleScroll = () => {
      /** Viewport vertical offset
       * @type {number}
       */
      const position = window.pageYOffset; 
      setScrollHeight(position);
    };
    // Calling the handleScroll function for every scroll event
    useEffect(() => {
      window.addEventListener( "scroll" ,handleScroll);
    }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling = {scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
