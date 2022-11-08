import React from "react";
import CakeBaseCost from "./CakeBaseCost";
import DesignCost from "./DesignCost";
import FlavorsFillingsCost from "./FlavorsFillingsCost";

const TotalCakeCost = () => {
    return (
        <>
            <div
                id="cake-cost-comp"
                className="main-title-container cake-base-component"
            >
                <h3>
                    Total Cake Cost
                    <p className="italics">
                        Actual costs may vary upon further discussion. All
                        prices are subject to change without further notice
                    </p>
                </h3>

                <br />

                {/* Cake Base Cost */}
                <CakeBaseCost />

                {/* Design Cost */}
                <DesignCost />

                {/* Flavors, Fillings, etc. Cost */}
                <FlavorsFillingsCost />
            </div>
        </>
    );
};

export default TotalCakeCost;
