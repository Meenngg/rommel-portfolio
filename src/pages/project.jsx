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
                            <div>
                                <h3>Rommel Portfolio</h3>
                                <label>Personal Website, Portfolio</label>
                                <section>
                                    <p>A self-made website portfolio made in ReactJS and style-components CSS. Created with a simplicity design and uniform colour scheme layout.</p>
                                    
                                    <div className="project-stack-used">
                                        <section><p>React</p></section>
                                        <section><p>Styled Components</p></section>
                                    </div>
                                </section>
                            </div>
                            <div>
                                <section>
                                    <button id="btn-1"><a href=""></a><i className="uil uil-arrow-up-right"></i></button>
                                    <button><i className="uil uil-github"></i></button>
                                </section>
                            </div>
                        </section>
                    </div>
                    <div className="project-card">2</div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Project;