import SingleTierSheetImg from "../../../../../assets/img/create_a_cake/single-tier-sheet.png";

const SingleTierSheet = () => {
    return (
        <div className="base-item-container">
            <div className="base-item">
                <ul className="base-tier-list-item">
                    <li>
                        <input type="radio" name="shape" />
                        <label htmlFor="single-tier">
                            <img
                                src={SingleTierSheetImg}
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

export default SingleTierSheet;
