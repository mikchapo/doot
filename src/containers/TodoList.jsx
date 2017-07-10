import React from 'react'
import TodoItem from '../components/TodoItem'
import TodoHeader from '../components/TodoHeader'
import {TODO_ATTRIBUTES} from '../attributes'


export default class TodoList extends React.Component {
    render() {
        var todos = this.props.todos;

        for (var i=0; i<TODO_ATTRIBUTES.length; i++) {
            if (this.props.sort.attribute == TODO_ATTRIBUTES[i].name) {
                todos.sort(TODO_ATTRIBUTES[i].sortFunction);

                if (!this.props.sort.ascending) {
                    todos.reverse();
                }

                break;
            }
        }

        return (
            <table className="todo-list">
                <thead>
                    <tr>
                        {TODO_ATTRIBUTES.map(attribute =>
                            <TodoHeader key={attribute.id} onClick={this.props.actions.changeSort} sort={this.props.sort} attribute={attribute} />
                        )}
                        <th>Tools</th>
                    </tr>
                </thead>

                <tbody>
                    {todos.map(todo =>
                        this.props.filter == null ?
                        <TodoItem key={todo.id} todo={todo} actions={this.props.actions} />
                        : this.props.filter == todo.status ?
                        <TodoItem key={todo.id} todo={todo} actions={this.props.actions} />
                        :
                        null
                    )}
                </tbody>
            </table>
        );
    }
}
