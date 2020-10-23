import React, {useState, useEffect} from 'react';
import './App.scss';
import HeaderMenu from './HeaderMenu';
import Route from "./Route";
import PostsList from "./PostsList";
import Post from "./Post";
import UsersList from "./UsersList";
import UserProfile from "./UserProfile";
import CommentsList from "./CommentsList";


const App = () => {
    return (
        <div className="app-wrapper">
                <HeaderMenu />
                <div className="content-wrapper">
                    <Route path="/">
                        <PostsList />
                    </Route>
                    <Route path="/users">
                        <UsersList />
                    </Route>
                    <Route path="/comments">
                        <CommentsList />
                    </Route>
                    {/*<Route path="/post/:id">*/}
                    {/*    <UsersList />*/}
                    {/*</Route>*/}
                    <Route path="/user/:id">
                        <UserProfile />
                    </Route>
                </div>
        </div>
    );
};

export default App;