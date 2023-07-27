import React from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
import { BiMessageRounded, BiShareAlt } from "react-icons/bi";

const TuitStats = ({ tuit }) => {
    return (
        <div className="row">
            <div className="col">
                <BiMessageRounded /> {tuit.replies}
            </div>
            <div className="col">
                <AiOutlineRetweet /> {tuit.retuits}
            </div>
            <div className="col">
                {tuit.liked && <AiFillHeart className="text-danger" />}
                {!tuit.liked && <AiOutlineHeart />} {tuit.likes}
            </div>
            <div className="col">
                <BiShareAlt />
            </div>
        </div>
    )
}

export default TuitStats