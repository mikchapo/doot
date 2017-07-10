import React from 'react'
import {TODO_STATUSES} from '../statuses'

export default class TodoItem extends React.Component {
    handleDelete = e => {this.props.actions.deleteTodo(this.props.todo.id)}
    handleEdit = e => {this.props.actions.editTodo(this.props.todo.id)}
    handleCompleted = e => {this.props.actions.changeStatusTodo("completed", this.props.todo.id)}
    handleFailed = e => {this.props.actions.changeStatusTodo("failed", this.props.todo.id)}

    render () {
        return (
            <tr className={"todo-item" + (this.props.todo.status != null ? (" " + this.props.todo.status) : "")}>
                <td>{this.props.todo.text}</td>

                {TODO_STATUSES.map(status => status.status == this.props.todo.status &&
                    <td key={status.id} className="todo-status">{status.text}</td>
                )}

                <td>{new Date(this.props.todo.dateCreated).toLocaleDateString()} {new Date(this.props.todo.dateCreated).toLocaleTimeString()}</td>

                <td>{new Date(this.props.todo.dateUpdated).toLocaleDateString()} {new Date(this.props.todo.dateUpdated).toLocaleTimeString()}</td>

                {this.props.todo.status == "edit" ?
                    <td className="todo-tools">
                        <i className='fa fa-undo icon-inline icon-unedit' title='Stop Editing' onClick={this.handleEdit}></i>
                    </td>

                : this.props.todo.status == "completed" ?
                    <td className="todo-tools">
                        <i className='fa fa-undo icon-inline icon-incomplete' title='Mark as Incomplete' onClick={this.handleCompleted}></i>
                    </td>

                : this.props.todo.status == "failed" ?
                    <td className="todo-tools">
                        <i className='fa fa-undo icon-inline icon-unfail' title='Mark as Unfailed' onClick={this.handleFailed}></i>
                    </td>

                :
                    <td className="todo-tools">
                        <i className='fa fa-check icon-inline icon-complete' title='Mark as Complete' onClick={this.handleCompleted}></i>
                        <i className='fa fa-times icon-inline icon-fail' title='Mark as Failed' onClick={this.handleFailed}></i>
                        <i className='fa fa-pencil icon-inline icon-edit' title='Edit this Item' onClick={this.handleEdit}></i>
                        <i className='fa fa-trash icon-inline icon-delete' title='Delete this Item' onClick={this.handleDelete}></i>
                    </td>}
            </tr>
        );
    }
}
