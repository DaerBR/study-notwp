import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
    return (
        <div className="header-menu">
            <Link to="/">Posts</Link>
            <Link to="/comments">Comments</Link>
            <Link to="/users">Users</Link>
            <Link to="/todos">Todos</Link>
        </div>
    );
};

export default HeaderMenu;