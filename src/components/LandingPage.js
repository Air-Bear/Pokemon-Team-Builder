import React from "react";
import{ Link } from "react-router-dom"

function LandingPage() {
    return(
        <div className="landContainer">
            <img 
                className="landPageImg"
                src="" 
                alt="" 
            />
            <div className="landBtnGroup">
                <Link to="/login">
                    <button className="landPageBtn">Login</button>
                </Link>
                
                <Link to="/register">
                    <button className="landPageBtn">Register</button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;