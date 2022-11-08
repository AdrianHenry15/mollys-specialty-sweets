import React, { useState } from "react";

const Flavors = (props) => {
    // variables
    const CakeFlavors = props.flavors;

    // state
    const [flavorsOptions, setFlavorsOptions] = useState(false);

    // functions
    const handleFlavorsOptionClick = () => {
        setFlavorsOptions(!flavorsOptions);
    };

    return (
        <>
            <div className="dropdown-container">
                {flavorsOptions && (
                    <img
                        src={props.downArrow}
                        alt="dropdown_arrow"
                        className="dropdown-arrow down-arrow"
                        onClick={handleFlavorsOptionClick}
                    />
                )}
                {!flavorsOptions && (
                    <img
                        src={props.rightArrow}
                        alt="dropdown_arrow"
                        className="dropdown-arrow right-arrow"
                        onClick={handleFlavorsOptionClick}
                    />
                )}
                <h3>Flavors</h3>
            </div>
            {flavorsOptions && (
                <div className="options-container">
                    {CakeFlavors.map(({ id, name }) => {
                        return (
                            <ul key={id} className="options-list">
                                <li className="options-list-item">{name}</li>
                            </ul>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Flavors;
