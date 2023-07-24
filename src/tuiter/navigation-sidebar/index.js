import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiEllipsisHorizontalCircle } from "react-icons/hi2";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const active = pathname.split("/")[2];
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
    const icons = [<FaHome />, <FaHashtag />, <FaBell />, <FaEnvelope />, <FaBookmark />, <FaList />, <FaUser />, <HiEllipsisHorizontalCircle />]

    const widebar = links.map((link, index) => {
        const icon = icons[index];
        return (
            <Link key={link} to={`/tuiter/${link}`}
                className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                {icon} {link}
            </Link>
        );
    });

    const narrowbar = links.map((link, index) => {
        const icon = icons[index];
        return (
            <Link key={link} to={`/tuiter/${link}`}
                className={`list-group-item ${active === link ? "active" : ""}`}>
                {icon}
            </Link>
        );
    });

    return (
        // <div className="list-group">
        //     <Link to={"/tuiter/home "} className={`list-group-item
        //         ${active === "home" ? "active" : ""}`}>Home</Link>
        //     <Link to={"/tuiter/explore "} className={`list-group-item
        //         ${active === "explore" ? "active" : ""}`}>Explore</Link>
        //     <Link to={"/tuiter/notifications "} className={`list-group-item
        //         ${active === "notifications" ? "active" : ""}`}>Notifications
        //     </Link>
        //     <Link to={"/tuiter/messages "} className={`list-group-item
        //         ${active === "messages" ? "active" : ""}`}>Messages</Link>
        //     <Link to={"/tuiter/bookmarks "} className={`list-group-item
        //         ${active === "bookmarks" ? "active" : ""}`}>Bookmarks</Link>
        //     <Link to={"/tuiter/lists "} className={`list-group-item
        //         ${active === "lists" ? "active" : ""}`}>Lists</Link>
        //     <Link to={"/tuiter/profile "} className={`list-group-item
        //         ${active === "profile" ? "active" : ""}`}>Profile</Link>
        //     <Link to={"/tuiter/more "} className={`list-group-item
        //         ${active === "more" ? "active" : ""}`}>More</Link>
        // </div>
        // <div className="list-group">
        //     {links.map((link) =>
        //         <Link key={link} to={`/tuiter/${link}`}
        //             className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
        //             {link}
        //         </Link>
        //     )}
        // </div>
        <div className="list-group">
            <Link to={`/tuiter`} className="list-group-item">
                <FaTwitter />
            </Link>
            <div className="d-none d-xl-block">{widebar}</div>
            <div className="d-block d-xl-none">{narrowbar}</div>
        </div>
    );
}

export default NavigationSidebar