import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
// import Cake from "../../assets/img/cakes/backdrop_cake.jpg";

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-title-container">
                    <div className="btn-wrapper">
                        {/* <Link to="/contact">
                            <button className="btn-container">
                                <h4>Contact Us</h4>
                            </button>
                        </Link> */}
                        {/* <button className="btn-container">
                            <h4>Weddings</h4>
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
