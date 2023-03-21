import "../App.css";
import "../styles/home.style.css";
import myProfile  from "../assets/Grad_Profile.png";

export const Home = () => {
    return ( 
        <>
        <div className="home">
            <div className="home-links">
                <i className="v-line-white"></i>
                <i className="uil uil-home"></i>
                <i className="v-line-white"></i>      
            </div>
            <div className="home-context">
            {/* <hr style={{background: 'lime', color: 'lime', height: '1px'}} /> */}
                <h1>Rommel Cazeñas</h1>
                <p className="name-sub">Aspiring Web Developer!</p>
                <section>
                    <p>You can also call me Meng <span style={{fontSize:"0.8em", color: "#009cff"}}>(as my nickname)</span>. I am passionate in creating web application and eager to learn new things about web developement. </p>
                    <div>
                        <a href="https://github.com/Meenngg"><i className="uil uil-github"></i></a>
                        <a href="https://www.linkedin.com/in/rommel-caze%C3%B1as/"><i className="uil uil-linkedin"></i></a>
                        <a href="https://www.facebook.com/rommel.diana.cazenas"><i className="uil uil-facebook"></i></a>
                    </div>               
                </section>
                <section>
                        <button>Check me! <i className="uil uil-location-arrow"></i></button>
                </section>
                

            </div>
            {/* <div>ewewes</div> */}
            <div className="home-image">
                <img src={myProfile} alt="Rommel Cazeñas Profile" />
                <section>
                    <i className="uil uil-github"></i>
                    <i className="uil uil-facebook"></i>
                    <i className="uil uil-linkedin"></i>
                </section>   
            </div>


            {/* <div className="home-links">
                <div className="left-section">
                    <i className="v-line-white"></i>
                    div.section
                    <i className="uil uil-facebook"></i>
                    <i className="uil uil-github"></i>
                    <i className="uil uil-linkedin"></i>
                    <i className="v-line-white"></i>
                </div>
                
            </div> */}



        </div>
        </>
     );
}
 
export default Home;