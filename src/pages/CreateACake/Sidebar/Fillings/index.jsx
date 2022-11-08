import React, { useState } from "react";

const Fillings = (props) => {
    // variables
    const CakeFillings = props.fillings;

    // state
    const [fillingsOptions, setFillingsOptions] = useState(false);

    // functions
    const handleFillingsOptionClick = () => {
        setFillingsOptions(!fillingsOptions);
    };

    return (
        <>
            <div className="dropdown-container">
                {fillingsOptions && (
                    <img
                        src={props.downArrow}
                        alt="dropdown_arrow"
                        className="dropdown-arrow down-arrow"
                        onClick={handleFillingsOptionClick}
                    />
                )}
                {!fillingsOptions && (
                    <img
                        src={props.rightArrow}
                        alt="dropdown_arrow"
                        className="dropdown-arrow right-arrow"
                        onClick={handleFillingsOptionClick}
                    />
                )}
                <h3>Fillings</h3>
            </div>
            {fillingsOptions && (
                <div className="options-container fillings-options-container">
                    {CakeFillings.map(({ id, name }) => {
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

export default Fillings;
