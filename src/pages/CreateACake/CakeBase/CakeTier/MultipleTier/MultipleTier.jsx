import React, { useState } from "react";

// Diagrams
import MultipleTierRound from "../../../../../assets/img/create_a_cake/multiple-tier-round-white.png";

const MultipleTier = () => {
    const [multipleTier, setMultipleTier] = useState(false);

    const handleMultipleTierClick = () => {
        setMultipleTier(!multipleTier);
    };

    return (
        <div className="base-item-container">
            <div className="base-item">
                <ul className="base-tier-list-item">
                    <li>
                        <input type="radio" name="tier" />
                        <label htmlFor="multiple-tier">
                            <img
                                src={MultipleTierRound}
                                alt="multiple"
                                className="multiple-tier-round"
                                onClick={handleMultipleTierClick}
                            />
                            <h4 className="base-name">Multiple</h4>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MultipleTier;
