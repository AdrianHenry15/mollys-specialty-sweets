import React from "react";
import "./index.scss";

import CakeBase from "./CakeBase";
import Sidebar from "./Sidebar/index.jsx";
import ChooseFlavor from "./ChooseFlavor";
import DesignDetails from "./DesignDetails";
import TotalCakeCost from "./TotalCakeCost";

const CreateACake = () => {
    return (
        <div className="create-cake-container">
            <Sidebar />
            <div className="create-cake-main-wrapper">
                <CakeBase />
                <ChooseFlavor />
                <DesignDetails />
                <TotalCakeCost />
            </div>
        </div>
    );
};

export default CreateACake;
