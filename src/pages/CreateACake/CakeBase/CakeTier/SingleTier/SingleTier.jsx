import React, { useState } from "react";
import SingleTierRound from "../../../../../assets/img/create_a_cake/single-tier-round-white.png";

const SingleTier = () => {
    const [singleTier, setSingleTier] = useState(false);

    const handleSingleTierClick = () => {
        setSingleTier(!singleTier);
    };
    return (
        <div className="base-item-container">
            <div className="base-item">
                <ul className="base-tier-list-item">
                    <li>
                        <input type="radio" name="tier" />
                        <label htmlFor="single-tier">
                            <img
                                src={SingleTierRound}
                                alt="single"
                                className="single-tier-round"
                                onClick={handleSingleTierClick}
                            />
                            <h4 className="base-name">Single</h4>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SingleTier;
