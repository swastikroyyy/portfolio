import React from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">

            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Swastik Roy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/about">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/project">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/contact">Contact me</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar

