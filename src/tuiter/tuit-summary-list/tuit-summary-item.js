import React from "react";

const TuitSummaryItem = (
    {
        tuit = {
            "topic": "",
            "userName": "",
            "time": "",
            "title": "",
            "image": ""
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-9">
                    <div>{tuit.userName} - {tuit.time}</div>
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.title}</div>
                </div>
                <div className="col-3 d-flex justify-content-end align-items-center">
                    <div className="wd-square-box">
                        <img className="img-fluid rounded-3"
                            alt={tuit.image}
                            src={`../images/${tuit.image}`} />
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitSummaryItem