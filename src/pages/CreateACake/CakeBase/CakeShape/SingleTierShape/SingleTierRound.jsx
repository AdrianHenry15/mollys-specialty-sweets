import React from "react";
import SingleTierRoundImg from "../../../../../assets/img/create_a_cake/single-tier-round-white.png";

const SingleTierRound = () => {
    return (
        <div className="base-item-container">
            <div className="base-item">
                <ul className="base-tier-list-item">
                    <li>
                        <input type="radio" name="shape" />
                        <label htmlFor="single-tier">
                            <img
                                src={SingleTierRoundImg}
                                alt="single"
                                className="single-tier-round"
                            />
                            <h4 className="base-name">Round</h4>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SingleTierRound;
