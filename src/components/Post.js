import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import server from "../apis/server";

const Post = (props) => {
    const [post, setPost] = useState({});

    useEffect(()=> {
        console.log(props.match.params.id);
        const getPost = async () => {
            const { data } = await server.get(`/posts/${props.match.params.id}`);
            setPost(data);
        };

        getPost();

    }, [props.match.params.id]);

    return (
            <React.Fragment>
                <div className="page-title-block">
                    <h1 className="page-title">{_.capitalize(post.title)}</h1>
                </div>
                <div className="post-meta">
                    <div className="post-author">Author: <Link to={`/user/${post.userId}`}>{post.userId}</Link></div>
                </div>
                <div className="post-content">
                    {post.body}
                </div>
                <div className="comments-block">
                    <div className="comments-title">Post comments:</div>
                </div>

            </React.Fragment>
        );

};

export default Post;
