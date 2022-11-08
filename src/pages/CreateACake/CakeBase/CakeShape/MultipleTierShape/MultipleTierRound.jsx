import MultipleTierRoundImg from "../../../../../assets/img/create_a_cake/multiple-tier-round-white.png";

const MultipleTierShape = () => {
    return (
        <div className="base-item-container">
            <div className="base-item">
                <ul>
                    <li>
                        <input type="radio" name="shape" />
                        <label htmlFor="multiple-tier">
                            <img
                                src={MultipleTierRoundImg}
                                alt="multiple"
                                className="multiple-tier-sheet"
                            />
                            <h4 className="base-name">Round</h4>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MultipleTierShape;
