import React from 'react'
import './Project.css'
import img1 from '../../projj.jpg'
import { Link } from 'react-router-dom'

const Project = () => {
    return (

        <div className="header-wraperr">
            <div className="main-info">
                <div className="card" style={{ "width": "16rem", "box-shadow": "0px 0px 15px 0px #040404" }}>
                    <img src={img1} className="img-fluid card-img-top" style={{ "height": "11rem" }} alt="project" />
                    <div className="card-body">
                        <small className="card-title"><b>Your Nutrition Consultant</b></small>
                        <p className="card-text">This project build on reactjs,chartjs and third party api.</p>
                        <Link to={{ pathname: "https://yournc.000webhostapp.com" }} className="btn btn-primary" target="_blank">view</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
