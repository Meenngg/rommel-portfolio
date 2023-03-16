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
                <p className="name-sub">Aspiring Software Developer!</p>
                <section>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, voluptates beatae explicabo quia atque quas rerum nulla optio consectetur ipsam?</p>
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