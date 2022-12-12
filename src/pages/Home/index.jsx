import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Cake from "../../assets/img/cakes/main-cake.jpg";

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="img-container">
                    <img className="main-cake" src={Cake} alt="main-cake" />
                </div>
            </div>
        </>
    );
};

export default Home;
