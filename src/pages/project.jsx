import "../App.css";
import "../styles/project.style.css";

export const Project = () => {
    return ( 
        <div className="project">
            <div className="left-section">
                <i className="v-line-white"></i>
                    <i class="white uil uil-folder"></i>
                <i className="v-line-white"></i>
            </div>
            <div className="project-section">
                <div className="project-header">
                    <h1>My Projects</h1>
                    <p>List of my treasured projects</p>
                </div>
                <div className="project-list">
                    <div className="project-card">
                        <section className="card-preview"></section>
                        <section className="card-description">
                            <h3>My First Website</h3>
                            <label>Lorem ipsum dolor sit amet consectetur adipisicing.</label>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi hic ipsam nulla deleniti necessitatibus atque!</p>
                            <section>
                                React1 React2 React3 React4
                            </section>
                            <section>
                                <button id="btn-1"><i className="uil uil-arrow-up-right"></i></button>
                                <button><i className="uil uil-github"></i></button>
                            </section>
                        </section>
                    </div>
                    <div className="project-card">2</div>
                    <div className="project-card">3</div>
                    <div className="project-card">4</div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Project;