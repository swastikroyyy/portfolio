import React from 'react';

import img from "../../img/SwastikRoy.jpeg";
import './About.css';
import file from "../../SWASTIK_RESUME.pdf"
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="header-wraperr">

            <div className="main-info">
                <div className="card  mb-6" style={{
                    "max-width": 560, padding: "12px 8px", "border-radius": "10px"
                }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt="swastik" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">

                                <p className="card-text">Hey, This is Swastik Roy. I live in Kolkata. I have passed my 12th from West Bengal State University. I am BCA graduate from M.A.K.A.U.T University And also Completed my M.C.A. from the same University & Currently am learning MERN stack Development.  </p>
                                <Link style={{ "text-decoration": "none" }} to={file} target="blank">
                                    Resume
                                </Link>

                            </div>
                        </div>
                    </div>
                </div >
            </div>

        </div >

    )
}

export default About
