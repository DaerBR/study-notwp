import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from "../actions";
import _ from "lodash";

class UserProfile extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
    }

    render() {

        if (_.size(this.props.user) === 0) {
            return <div>Loading...</div>
        }
        const user = this.props.user[0];
        return (
            <React.Fragment>
                <div className="page-title-block">
                    <h1 className="page-title">{user.username} profile</h1>
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
                    <div className="comments-list"></div>
                </div>
                <div className="comments-block">
                    <div className="comments-title">User's latest comments:</div>
                    <div className="comments-list"></div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
};

export default connect(mapStateToProps, { fetchUser })(UserProfile);