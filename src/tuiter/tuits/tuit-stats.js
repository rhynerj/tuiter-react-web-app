import React from "react";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { AiOutlineHeart, AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
import { BiMessageRounded, BiShareAlt } from "react-icons/bi";
import { BsHandThumbsDown, BsHandThumbsDownFill } from "react-icons/bs";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }));
    }
    const dislikeClickHandler = () => {
        dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked: true }));
    }

    return (
        <div className="row">
            <div className="col">
                <BiMessageRounded />
                <span className="ms-2">{tuit.replies}</span>
            </div>
            <div className="col">
                <AiOutlineRetweet />
                <span className="ms-2">{tuit.retuits}</span>
            </div>
            <div className="col">
                {tuit.liked ?
                    <AiFillHeart className="text-danger"
                        onClick={likeClickHandler} /> :
                    <AiOutlineHeart
                        onClick={likeClickHandler} />}
                {/* {tuit.liked && <AiFillHeart className="text-danger" />}
                {!tuit.liked && <AiOutlineHeart
                    onClick={() =>
                        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }))} />} */}
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div className="col">
                {tuit.disliked ?
                    <BsHandThumbsDownFill
                        onClick={dislikeClickHandler} /> :
                    <BsHandThumbsDown
                        onClick={dislikeClickHandler} />}
                <span className="ms-2">{tuit.dislikes}</span>
            </div>
            <div className="col">
                <BiShareAlt />
            </div>
        </div>
    )
}

export default TuitStats