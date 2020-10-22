import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPostsWithUsers } from '../actions';
import { Link } from "react-router-dom";

class PostsList extends Component {
    componentDidMount() {
        this.props.fetchPostsWithUsers();
    }
    renderPostsList() {
        if (this.props.posts.length === 0) {
            return <tr><td>Loading...</td></tr>
        }

        return this.props.posts.map(post => {
            return (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td><Link className="icon-url" to={`/post/${post.id}`}>{post.title}</Link></td>
                    <td><Link to={`/user/${post.userId}`}>{post.userId}</Link></td>
                    <td>
                        <div className="item-block buttons-block">
                            <button><Link className="icon-url" to={`/post/${post.id}`}><i className="icon-edit"></i></Link></button>
                            <button><Link className="icon-url" to={`/post/${post.id}`}><i className="icon-cross-close"></i></Link></button>
                        </div>
                    </td>
                </tr>
            );

        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-title-block">
                    <h1 className="page-title">Posts</h1>
                    <div className="search-block">
                        <input type="text" name="search-posts"/>
                        <button className="header-search-button">Search posts</button>
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
                        {this.renderPostsList()}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts, users: state.users };
};

export default connect(
    mapStateToProps,
    { fetchPostsWithUsers }
)(PostsList);