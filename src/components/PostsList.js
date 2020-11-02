import React, {useState, useEffect} from 'react';
import server from "../apis/server";
import { Link } from "react-router-dom";

const PostList = () => {
    const [term, setTerm] = useState('');
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect( () => {
        const getPosts = async () => {
            const { data } = await server.get('/posts');
            setPosts(data);
        };
        getPosts();
    }, []);

    useEffect( () => {
        const getUsers = async () => {
            const { data } = await server.get('/users');
            setUsers(data);
        };
        getUsers();
    }, []);

    const onSearchInputChange = async  e => {
        await setTerm(e.target.value);
    };
    const renderPosts = posts.map((post) => {
        const userData = users.find(user => user.id === post.userId);
        return (
            <tr key={post.id}>
                <td>{post.id}</td>
                <td><Link className="icon-url" to={`/post/${post.id}`}>{post.title}</Link></td>
                <td><Link to={`/user/${post.userId}`}>{userData ? userData.username : post.userId}</Link></td>
                <td>
                    <div className="item-block buttons-block">
                        <button><Link className="icon-url" to={`/post/${post.id}`}><i className="icon-edit"></i></Link></button>
                        <button><Link className="icon-url" to={`/post/${post.id}`}><i className="icon-cross-close"></i></Link></button>
                    </div>
                </td>
            </tr>
        );
    });

    return (
        <React.Fragment>
            <div className="page-title-block">
                <h1 className="page-title">Posts</h1>
                <div className="search-block">
                    <label className="header-search-label">Filter by title:</label>
                    <input type="text" name="search-posts" value={term} onChange={(e) => {onSearchInputChange(e)}}/>
                </div>
            </div>
            <div className="list-wrapper">
                <table>
                    <thead className="list-header">
                    <tr>
                        <th className="item-block header-block">ID</th>
                        <th className="item-block header-block">Title</th>
                        <th className="item-block header-block">Author</th>
                        <th className="item-block header-block">Tools</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!posts.length ? <tr><td>No posts found...</td></tr> : renderPosts}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default PostList;