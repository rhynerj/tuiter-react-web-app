import React from "react";
import TuitSummaryList from "../tuit-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css"

function ExploreScreen() {
    return (
        <div>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                        className="form-control rounded-pill ps-5" />
                    <AiOutlineSearch className="fs-3 position-absolute 
                       wd-nudge-up"/>
                </div>
                <div className="col-1">
                    <GoGear className="wd-top-4 float-end
                       fs-3 position-relative"/>
                </div>
            </div>
            <ul className="nav nav-pills mb-2 mt-2">
                <li className="nav-item">
                    <a className="nav-link active" href="#/tuiter/explore">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/tuiter/explore">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/tuiter/explore">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="../images/andromeda.jpeg" className="img-fluid" alt="the andromeda galaxy"/>
                <h1 className="wd-text-overlay">
                    Exploring the Andromeda Galaxy</h1>
            </div>
            <TuitSummaryList />
        </div>
    );
}

export default ExploreScreen