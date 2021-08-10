import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { Link } from 'react-router-dom';

import { FaGithub, FaLinkedin } from "react-icons/fa"
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'email_template', e.target, 'user_CiMrhXhFOc6ecpH8wJCGM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className="header-wraperr">

            <div className="main-info">
                <form onSubmit={sendEmail}>

                    <div className="row pt-5 mx-auto ">
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" />
                            <div className="col-12 mt-1 ">
                                <Link to={{ pathname: "https://github.com/swastikroyyy" }} target="_blank"><FaGithub className="me-1 colo" /></Link>
                                <Link to={{ pathname: "https://www.linkedin.com/in/swastik-roy-306702135/" }} target="_blank"><FaLinkedin className="cb" /></Link>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div >
    )
}

export default Contact
