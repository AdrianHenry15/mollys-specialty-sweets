import React from "react";
import CakeInscription from "./CakeInscription";
import CakeType from "./CakeType";
import PreferredColors from "./PreferredColors";
import WhosCake from "./WhosCake";

const DesignDetails = () => {
    return (
        <>
            <div className="main-title-container cake-base-component">
                <h3>Design Details</h3>
                <br />

                {/* What Is The Cake For */}
                <CakeType />

                {/* Whos The Cake For */}
                <WhosCake />

                {/* List of Preferred Colors for Cake */}
                <PreferredColors />

                {/* Inscription For Cake */}
                <CakeInscription />
            </div>
        </>
    );
};

export default DesignDetails;
