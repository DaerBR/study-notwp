import React from "react";
import Link from "./Link";

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