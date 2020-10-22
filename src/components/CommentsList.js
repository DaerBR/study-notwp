import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions';
import { Link } from 'react-router-dom';

class CommentsList extends Component {
    componentDidMount() {
        this.props.fetchComments();
    }

    getRandomDate = () => {
        const start = new Date(2017, 0, 1);
        const end = new Date();
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

        return randomDate.toGMTString();
    }

    renderCommentsList = () => {
        if (this.props.comments.length === 0) {
            return <tr><td>Loading...</td></tr>
        }
        return this.props.comments.map(comment => {
            return(
                <tr key={comment.id}>
                    <td>{comment.id}</td>
                    <td><Link to={`/post/${comment.postId}`}>{comment.name}</Link></td>
                    <td>{comment.body}</td>
                    <td>{comment.email}</td>
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
    return { comments: state.comments }
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);