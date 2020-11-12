import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, fetchUsers } from '../actions';
import { Link } from 'react-router-dom';

class CommentsList extends Component {

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchComments();
    }

    getRandomDate = () => {
        const start = new Date(2017, 0, 1);
        const end = new Date();
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

        return randomDate.toLocaleDateString();
    }

    renderCommentsList = () => {
        if (this.props.comments.length === 0) {
            return <tr><td>Loading...</td></tr>
        }
        return this.props.comments.map(comment => {
            // This won't work - JSONplaceholder's Comments emails have nothing to do with it's userlist. Sadly - emails only here.
            const userData = this.props.users.find((user) => {
                return user.email === comment.email
            });

            return(
                <tr key={comment.id}>
                    <td>{comment.id}</td>
                    <td><Link to={`/post/${comment.postId}`}>{comment.name}</Link></td>
                    <td>{comment.body}</td>
                    <td>{userData ? <Link to={`/users/${userData.userId}`}>{userData.username}</Link> : comment.email}</td>
                    <td>{this.getRandomDate()}</td>
                    <td>
                        <div className="item-block buttons-block">
                            <button><i className="icon-cross-close"></i></button>
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
                    <h1 className="page-title">User's comments</h1>
                </div>
                <div className="list-wrapper">
                    <table>
                        <thead className="list-header">
                        <tr>
                            <th className="item-block header-block">ID</th>
                            <th className="item-block header-block">Post title</th>
                            <th className="item-block header-block">Text</th>
                            <th className="item-block header-block">User</th>
                            <th className="item-block header-block">Date</th>
                            <th className="item-block header-block">Tools</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderCommentsList()}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { comments: state.comments, users: state.users }
};

export default connect(mapStateToProps, { fetchComments, fetchUsers })(CommentsList);