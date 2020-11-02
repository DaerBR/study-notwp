import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import _ from "lodash";
import server from "../apis/server";

const UserProfile = (props) => {
    const [user, setUser] = useState({});
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const getUserData = async () => {
            const { data } = await server.get(`/users/${props.match.params.id}`)
            setUser(data);
        };
        getUserData();
    }, [props.match.params.id]);

    useEffect( () => {
        const getUserPosts = async () => {
            const { data } = await server.get(`/posts/?userId=${props.match.params.id}`);
            setUserPosts(data);
        };
        getUserPosts();
    }, [props.match.params.id]);

    const renderUserPosts = () => {
        if (userPosts.length === 0) {
            return <div>No posts from this user yet...</div>
        }
        return (
            <div className="list-wrapper">
                <table>
                    <thead className="list-header">
                    <tr>
                        <th className="item-block header-block">ID</th>
                        <th className="item-block header-block">Post title</th>
                        <th className="item-block header-block">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userPosts.map(post => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td><Link className="icon-url" to={`/post/${post.id}`}>{post.title}</Link></td>
                                <td>
                                    <div className="item-block buttons-block">
                                        <button><Link className="icon-url" to={`/post/${post.id}`}><i className="icon-edit"></i></Link></button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>



        );
    }


    if (_.size(user) === 0) {
        return <div>Loading...</div>
    }
    return (
        <React.Fragment>
            <div className="page-title-block">
                <h1 className="page-title">{user.username}'s profile</h1>
            </div>
            <div className="user-data">
                <div className="user-data-item">
                    <div className="user-data-label">Username:</div>
                    <div className="user-data-content">{user.username}</div>
                </div>
                <div className="user-data-item">
                    <div className="user-data-label">User full name:</div>
                    <div className="user-data-content">{user.name}</div>
                </div>
                <div className="user-data-item">
                    <div className="user-data-label">User email:</div>
                    <div className="user-data-content">{user.email}</div>
                </div>
                <div className="user-data-item">
                    <div className="user-data-label">User phone number:</div>
                    <div className="user-data-content">{user.phone}</div>
                </div>
                <div className="user-data-item">
                    <div className="user-data-label">User website:</div>
                    <div className="user-data-content">{user.website}</div>
                </div>
            </div>
            <div className="comments-block posts-block">
                <div className="comments-title">User's latest posts:</div>
                <div className="comments-list">
                    {renderUserPosts()}
                </div>
            </div>

        </React.Fragment>
    );

};

export default UserProfile;