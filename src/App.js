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
  const [toggleBurger, setToggleBurger] = useState(false);
  const [year, setYear] = useState("");

  const triggerBurger = () => {
    setToggleBurger(!toggleBurger);
  }

  const closeBurger = () => {
    setToggleBurger(false);
  }

  return (
    <>
      <div className="App">
        <section id="home">
          <nav id={toggleBurger ? "open" : "close"}>
          <img src={Profile_Logo} alt="Rommel Cazeñas" />
            <section className="nav-burger">
                <button onClick={triggerBurger}><i className={toggleBurger ? "burger uil uil-multiply" : "burger uil uil-bars"}></i></button>
            </section>
            <ul onClick={closeBurger}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
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
        {/* &#127793; Rommel Cazeñas :) &#127793; */}
          <div>
            <div>
              <button><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjDhQQtVckGNnhCcPXTdBZhcrpVhlgplNVGlrSlPqNMWQglkLkpvdFWlppFKxjVwCXwXNr"><i className="uil uil-envelope-alt"></i></a></button>
              <button><a href="https://github.com/Meenngg"><i className="uil uil-github-alt"></i></a></button>
              <button><a href="https://www.linkedin.com/in/rommel-caze%C3%B1as/"><i className="uil uil-linkedin"></i></a></button>
              <button><a href="https://www.facebook.com/rommel.diana.cazenas"><i className="uil uil-facebook-f"></i></a></button>
              <button><a href="https://m.me/rommel.diana.cazenas"><i className="uil uil-facebook-messenger-alt"></i></a></button>
            </div>
            <div>
              <p>&copy; 2023, Rommel Cazeñas Portfolio</p>
            </div>
          </div>
        </footer>

      </div>
    </>
    
  );
}

export default App;