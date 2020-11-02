import React from 'react';
import './App.scss';
import HeaderMenu from './HeaderMenu';
import PostsList from "./PostsList";
import Post from "./Post";
import UsersList from "./UsersList";
import UserProfile from "./UserProfile";
import CommentsList from "./CommentsList";
import { Router, Route, Switch } from 'react-router-dom';

import history from "../history";

const App = () => {
    return (
        <div className="app-wrapper">
            <Router history={history}>
                <HeaderMenu />
                <div className="content-wrapper">
                    <Switch>
                        <Route path="/" exact component={PostsList} />
                        <Route path="/post/:id" exact component={Post} />
                        <Route path="/users" exact component={UsersList} />
                        <Route path="/user/:id" exact component={UserProfile} />
                        <Route path="/comments" exact component={CommentsList} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;