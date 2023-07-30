import React from "react";
// import tuitsArray from "./tuits.json";
import { useSelector } from "react-redux";
import "./index.css";
import TuitItem from "./tuit-item";

const TuitList = () => {
    const { tuits } = useSelector(state => state.tuits)

    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        tuit={tuit} />
                )
            }
        </ul>
    );
}

export default TuitList