import React from 'react'
import "./Header.css";
import Typed from "react-typed";
import { Link } from 'react-router-dom';



const Header = () => {


    return (


        <div className="header-wraper">
            <div className="main-info">

                <Typed className="typed-text" strings={[`Hey <span className="wave">👋</span>,`, `My name is `,
                    `  Swastik`,
                    ` Swastik Roy.`, `Welcome to my portfolio`]}
                    typeSpeed={40}
                    backSpeed={60} loop smartBackspace />


                <Link className="btn-main-offer" to="/contact"><strong><b>Contact</b></strong></Link>



            </div>
        </div>

    )
}

export default Header
