import React from "react";

// cake flavors
import { CakeFlavors, CakeFillings, CakeFrostings } from "../../Cakes";

// components
import MainFlavor from "./MainFlavor";
import FillingFlavor from "./FillingFlavor";
import FrostingFlavor from "./FrostingFlavor";
import FreshFruit from "./FreshFruit";
import FlavorsCost from "./FlavorsCost";

const ChooseFlavor = () => {
    return (
        <>
            <div className="main-title-container">
                <h3>Choose Flavor</h3>
                <br />

                {/* Main Flavor */}
                <MainFlavor flavors={CakeFlavors} />
                {/* Filling Flavor */}
                <FillingFlavor fillings={CakeFillings} />
                {/* Frosting Flavor */}
                <FrostingFlavor frostings={CakeFrostings} />
                {/* Fresh Fruit */}
                <FreshFruit />
                {/* Flavors Cost */}
                <FlavorsCost
                    flavors={CakeFlavors}
                    fillings={CakeFillings}
                    frostings={CakeFrostings}
                />
            </div>
        </>
    );
};

export default ChooseFlavor;
