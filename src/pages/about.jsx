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
                                <p style={{fontSize: "1em"}}>Hi! I'm Meng	&#128513;. I love designing and creating application through ReactJS. I also opened my eyes	&#129488; in back-end development which gives me excitement &#128525;. </p>
                                <p style={{fontSize: "1em", paddingTop: "1em"}}>
                                    Im into gaming also with a genra of MMORPG and MOBA 🎮. Playing is fun and better if I play with my teamates with hardworks &#128170;.
                                </p>
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
                                    <p>Figma</p>
                                </div>
                                <div>
                                    <i class="uil uil-check-circle"></i>&nbsp;
                                    <p>Git</p>
                                </div>
                                <div>
                                    <i class="uil uil-check-circle"></i>&nbsp;
                                    <p>Github</p>
                                </div>
                                
                            </section>
                            <section id={toggle == 3 ? "show" : "hide"}>
                                <p><i class="uil uil-angle-right"></i>&nbsp; College Graduate from Cavite State University - Silang with &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;a degree of Bachelor of Science in Information Technology (2018 - 2023)</p>

                                <p><i class="uil uil-angle-right"></i>&nbsp; Senior Highschool Gradaute from STI College Dasmariñas - ICT in mobile app and web development (2016 - 2018)</p>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
     );
}
 
export default About;