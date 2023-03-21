import "../App.css";
import "../styles/about.style.css";
import ProfilePic from "../assets/Grad_Profile.png";
import { useState } from "react";

export const About = () => {
    const aboutArray = [1, 2, 3];
    const [toggle, setToggle] = useState(1);

    const changeTab = (data) => {
        setToggle(data);
    }

    return ( 
        <div className="about">
            <div className="left-section">
                <i className="v-line-dark"></i>
                    <i class="uil uil-user"></i>
                <i className="v-line-dark"></i>
            </div>
            <div className="about-content">
                <section className="section-header">
                    <h3>About me</h3>
                    <p>Things that describe me</p>
                </section>
                <section className="content-section">
                    <div className="profile-tab">
                        <img src={ProfilePic} alt="Rommel Cazeñas" />
                    </div>
                    <div className="info-tab">
                        <div className="header-button">
                            <section>
                                <button onClick={() => changeTab(1)}>
                                    <i className="uil uil-user-circle"></i>
                                    <p>Me</p>
                                </button>
                            </section>
                            <section>
                                <button onClick={() => changeTab(2)}>
                                    <i className="uil uil-brackets-curly"></i>
                                    <p>Skills</p>
                                </button>
                            </section>
                            <section>
                                <button onClick={() => changeTab(3)}>
                                    <i className="uil uil-briefcase"></i>
                                    <p>Educ</p>
                                </button>
                            </section>
                        </div>
                        <div className="desc-tab">
                            <section id={toggle == 1 ? "show" : "hide"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sequi numquam, odit porro, saepe ab voluptates, aperiam vitae dolore excepturi temporibus quaerat dolorem quas nesciunt minima maiores? Vel, sapiente ad!</p>
                            </section>
                            <section id={toggle == 2 ? "show" : "hide"}>
                                <div>
                                    <i class="uil uil-check-circle"></i>&nbsp;
                                    <p>JavaScript</p>
                                </div>
                                <div>
                                    <i class="uil uil-check-circle"></i>&nbsp;
                                    <p>ReactJS</p>
                                </div>
                                <div>
                                    <i class="uil uil-check-circle"></i>&nbsp;
                                    <p>HTML</p>
                                </div>
                                <div>
                                    <i class="uil uil-check-circle"></i>&nbsp;
                                    <p>CSS</p>
                                </div>
                                <div>
                                    <i class="uil uil-check-circle"></i>&nbsp;
                                    <p>Firebase</p>
                                </div>
                                <div>
                                    <i class="uil uil-check-circle"></i>&nbsp;
                                    <p>Styled</p>
                                </div>
                                <div>
                                    <i class="uil uil-check-circle"></i>&nbsp;
                                    <p>CSS</p>
                                </div>
                                <div>
                                    <i class="uil uil-check-circle"></i>&nbsp;
                                    <p>CSS</p>
                                </div>
                                <div>
                                    <i class="uil uil-check-circle"></i>&nbsp;
                                    <p>CSS</p>
                                </div>
                                
                            </section>
                            <section id={toggle == 3 ? "show" : "hide"}>
                                3
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
     );
}
 
export default About;