import React from "react";

const WhoToFollowListItem = (
    {
        who = { userName: '', handle: '', avatarIcon: '' }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-lg-3 col-xxl-2">
                    <img className="rounded-circle wd-icon-size"
                        alt={`${who.userName}'s avatar icon`}
                        src={`../images/${who.avatarIcon}`} />
                </div>
                <div className="col-lg-4 col-xxl-5 pe-0">
                    <div className="fw-bold">
                        {who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                    <button className="btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    );
}

export default WhoToFollowListItem;