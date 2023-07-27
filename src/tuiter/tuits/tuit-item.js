import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
import { deleteTuit } from "../reducers/tuits-reducer";
import { IoClose } from "react-icons/io5";

const TuitItem = ({ tuit }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
            <div className="row pt-2">
                <div className="col-auto">
                    <img className="float-end rounded-circle wd-icon-size-2"
                        alt={tuit.image}
                        src={`../images/${tuit.image}`} />
                </div>
                <div className="col-10 pe-0">
                    <div>
                        <IoClose className="float-end"
                            onClick={() => deleteTuitHandler(tuit._id)} /></div>
                    <div>
                        <span className="fw-bolder">{tuit.userName}</span>
                        <span> {tuit.handle} - {tuit.time}</span></div>
                    <div className="mb-3">{tuit.tuit}</div>
                    <TuitStats className="w-100"
                        tuit={tuit} />
                </div>
            </div>
        </li>
    );
};

export default TuitItem