import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchTodos, fetchUsers} from "../actions";
import {Link} from "react-router-dom";

class TodosList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchTodos();
    }

    renderTodosList() {
        const todos = this.props.todos;

        if (todos.length === 0) {
            return (
                <tr>
                    <td>No todos found...</td>
                </tr>
            );
        }

        console.log(this.props);
        return todos.map(todo => {
            const userData = this.props.users.find(user => user.id === todo.userId);
            return (
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td><Link to={`/user/${todo.userId}`}>{userData ? userData.username : todo.userId}</Link></td>
                    <td>{todo.title}</td>
                    <td><span className={todo.completed ? 'completed-todo' : 'active-todo'}>{todo.completed ? 'Completed' : 'Active'}</span></td>
                </tr>
            );
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-title-block">
                    <h1 className="page-title">To do list</h1>
                </div>
                <div className="list-wrapper">
                    <table>
                        <thead className="list-header">
                        <tr>
                            <th className="item-block header-block">ID</th>
                            <th className="item-block header-block">Title</th>
                            <th className="item-block header-block">User</th>
                            <th className="item-block header-block">Is Completed</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderTodosList()}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { todos: state.todos, users: state.users }
}
export default connect(mapStateToProps, { fetchTodos, fetchUsers })(TodosList);

