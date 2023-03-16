import './App.css';
import {useEffect, useState} from "react";
import Profile_Logo from "./assets/Meng_logo.png"
import About from './pages/about';
import Home from './pages/home';
import Project from './pages/project';
import Contact from './pages/contact';


function App() {
  // const [toggleBurger, setToggleBurger] = useState(false);

  // const menuFunc = () => {
  //   if(toggleBurger){
  //     const 
  //   }
  // }

  // useEffect = () => {
  //   menuFunc();
  // }, [];

  return (
    <>
      <div className="App">
        <section id="home">
          <nav>
          <img src={Profile_Logo} alt="Rommel Cazeñas" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <section className="nav-burger">
                <button><i className="burger uil uil-bars"></i></button>
            </section>
          </nav>
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>

        <footer style={{padding: "20px", backgroundColor: "#0d1721", textAlign: "center", color: "white"}}>
        &#127793; Rommel Cazeñas :) &#127793;
        </footer>

      </div>
    </>
    
  );
}

export default App;