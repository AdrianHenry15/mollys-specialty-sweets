import React from "react";

// cake flavors
import { CakeFlavors, CakeFillings, CakeFrostings } from "../../Cakes";

// icons
import DropdownArrow from "../../../assets/icons/icons8-down-24.png";
import RightArrow from "../../../assets/icons/icons8-next-page-50.png";

// Styles
import "../index.scss";
import "./Sidebar.scss";

// Components
import Sizes from "./Sizes";
import Frostings from "./Frostings";
import Fillings from "./Fillings";
import Flavors from "./Flavors";

const CakeOptions = [
    {
        id: 1,
        name: "Sizes",
    },
    {
        id: 2,
        name: "Flavors",
    },
    {
        id: 3,
        name: "Fillings",
    },
    {
        id: 4,
        name: "Frostings",
    },
    {
        id: 5,
        name: "",
    },
];

const Sidebar = () => {
    return (
        <>
            <div className="options-sidebar-container">
                <h2>Cake Options Overview</h2>

                {/* Sizes */}
                <Sizes
                    flavors={CakeFlavors}
                    fillings={CakeFillings}
                    frostings={CakeFrostings}
                    downArrow={DropdownArrow}
                    rightArrow={RightArrow}
                />
                {/* Flavors */}
                <Flavors
                    flavors={CakeFlavors}
                    fillings={CakeFillings}
                    frostings={CakeFrostings}
                    downArrow={DropdownArrow}
                    rightArrow={RightArrow}
                />
                {/* Fillings */}
                <Fillings
                    flavors={CakeFlavors}
                    fillings={CakeFillings}
                    frostings={CakeFrostings}
                    downArrow={DropdownArrow}
                    rightArrow={RightArrow}
                />
                {/* Frostings */}
                <Frostings
                    flavors={CakeFlavors}
                    fillings={CakeFillings}
                    frostings={CakeFrostings}
                    downArrow={DropdownArrow}
                    rightArrow={RightArrow}
                />
            </div>
        </>
    );
};

export default Sidebar;
