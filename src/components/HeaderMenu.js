import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
    return (
        <div className="header-menu">
            <Link href="/">Posts</Link>
            <Link href="/comments">Comments</Link>
            <Link href="/users">Users</Link>
        </div>
    );
};

export default HeaderMenu;