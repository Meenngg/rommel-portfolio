import "../App.css";
import "../styles/contact.style.css";

export const Contact = () => {
    return ( 
        <div className="contact">
            <div className="left-section">
                <i className="v-line-dark"></i>
                <i className="uil uil-at"></i>
                <i className="v-line-dark"></i>
            </div>
            <div className="content-section">
                <section className="section-header">
                    <h3>Contact Me</h3>
                    <p>Get in touch</p>
                </section>

                <section className="section-container">
                    <div>
                        <p className="contact-desc">Talk to me</p>
                        <div className="contact-list">
                            <div className="contact-card">
                                <i className="uil uil-envelope"></i>
                                <p>Gmail</p>
                                <p>rommel.cazenas@gmail.com</p>
                                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjDhQQtVckGNnhCcPXTdBZhcrpVhlgplNVGlrSlPqNMWQglkLkpvdFWlppFKxjVwCXwXNr">Write me <i className="uil uil-arrow-right"></i></a>
                            </div>
                            <div className="contact-card">
                                <i className="uil uil-facebook-messenger"></i>
                                <p>Messenger</p>
                                <p>Rommel Cazeñas</p>
                                <a href="https://m.me/rommel.diana.cazenas">Write me <i className="uil uil-arrow-right"></i></a>
                            </div>
                            <div className="contact-card">
                                <i className="uil uil-phone"></i>
                                <p>Phone</p>
                                <p>0915-798-9393</p>
                                <a>Write me <i className="uil uil-arrow-right"></i></a>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <p className="contact-desc">Compose a message</p>
                        <div className="contact-forms">
                            <div className="form-container">
                                <form>

                                    <label>Email</label>
                                    <input type="email" id="user-email" name="email" placeholder="Insert your email" />

                                    <label>Subject</label>
                                    <input type="text" id="user-subject" name="subject" placeholder="Insert your subject" />

                                    <label>Message</label>
                                    <textarea id="subject" name="subject" placeholder="Write your message"/>

                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>






























                {/* <section>
                    <div>
                        <i className="uil uil-envelope"></i>
                        <p>Gmail</p>
                        <p>rommel.cazenas@gmail.com</p>
                        <span>Write me <i className="uil uil-arrow-to-right"></i></span>
                    </div>
                    <div>
                    <i className="uil uil-facebook-messenger-alt"></i>
                        <p>Messenger</p>
                        <p>Rommel Cazeñas</p>
                        <span>Write me <i className="uil uil-arrow-to-right"></i></span>
                    </div>
                    <div>
                    <i className="uil uil-phone"></i>
                        <p>Phone</p>
                        <p>0915-798-9393</p>
                        <span>Write me <i className="uil uil-arrow-to-right"></i></span>
                    </div>
                </section>
                <section>
                    <div className="form-container">
                        <form>

                            <label>Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Insert your name" />

                            <label>Email</label>
                            <input type="text" id="lname" name="lastname" placeholder="Insert your email" />

                            <label>Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something" style={{width:"200px"}} />
                            <input type="range" name="" id="" />

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </section> */}
                
            </div>
        </div>
     );
}
 
export default Contact;