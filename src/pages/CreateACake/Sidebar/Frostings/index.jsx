import React, { useState } from "react";

const Frostings = (props) => {
    // variables
    const CakeFrostings = props.frostings;

    // state
    const [frostingsOptions, setFrostingsOptions] = useState(false);

    // functions
    const handleFrostingsOptionClick = () => {
        setFrostingsOptions(!frostingsOptions);
    };

    return (
        <>
            <div className="dropdown-container icings-container">
                {frostingsOptions && (
                    <img
                        src={props.downArrow}
                        alt="dropdown_arrow"
                        className="dropdown-arrow down-arrow"
                        onClick={handleFrostingsOptionClick}
                    />
                )}
                {!frostingsOptions && (
                    <img
                        src={props.rightArrow}
                        alt="dropdown_arrow"
                        className="dropdown-arrow right-arrow"
                        onClick={handleFrostingsOptionClick}
                    />
                )}
                <h3>Frostings</h3>
            </div>
            {frostingsOptions && (
                <div className="options-container icings-options-container">
                    {CakeFrostings.map(({ id, name }) => {
                        return (
                            <ul className="options-list" key={id}>
                                <li className="options-list-item">{name}</li>
                            </ul>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Frostings;
