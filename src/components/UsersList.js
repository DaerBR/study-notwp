import React, {useState, useEffect} from 'react';
import server from "../apis/server";
import { Link } from "react-router-dom";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        const getUsers = async () => {
            const { data } = await server.get('/users');
            setUsers(data);        };

        getUsers();
    }, []);

    const renderUsers = users.map((user) => {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td><Link href={`/user/${user.id}`}>{user.username}</Link></td>
                <td><Link href={`/user/${user.id}`}>{user.name}</Link></td>
                <td>{user.email}</td>
                <td>
                    <div className="item-block buttons-block">
                        <Link href={`/user/${user.id}`}><i className="icon-edit"></i></Link>
                    </div>
                </td>
            </tr>
        );
    });

    return (
        <React.Fragment>
            <div className="page-title-block">
                <h1 className="page-title">Users</h1>
                <div className="search-block">
                    <label className="header-search-label">Filter by username:</label>
                    <input type="text" name="search-posts"/>
                </div>
            </div>
            <div className="list-wrapper">
                <table>
                    <thead className="list-header">
                    <tr>
                        <th className="item-block header-block">ID</th>
                        <th className="item-block header-block">User name</th>
                        <th className="item-block header-block">Full name</th>
                        <th className="item-block header-block">Email</th>
                        <th className="item-block header-block">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!users.length ? <tr><td>No users found...</td></tr> : renderUsers}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};
export default UsersList;