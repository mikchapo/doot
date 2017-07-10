import React from 'react'
import NewTodoField from '../components/NewTodoField'
import SaveTodo from '../components/SaveTodo'

export default class NewTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {'fieldText': '', 'editing': null}
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentWillReceiveProps(nextProps){
        var editing_item = null
        for (var item of nextProps.todos){
            if (item.edit){editing_item=item}
        }
        if (editing_item != null){
            this.setState({'fieldText': editing_item.text, 'editing':editing_item.id});
            this.todoInput.focus();
        }
        else {
            this.setState({'fieldText': '', 'editing': null})
        }
    }
    onClick() {
        if (this.state.editing != null && this.state.fieldText == ""){
            this.props.actions.deleteTodo(this.state.editing);
        }
        else if (this.state.editing != null) {
            this.props.actions.updateTodo(this.state.fieldText, this.state.editing);
        }
        else if (this.state.fieldText != "") {
            this.props.actions.addTodo(this.state.fieldText);
        }
        this.setState({'fieldText': '', 'editing':null});
    }

    onChange(newTodoText) {
        this.setState({'fieldText': newTodoText});
    }

    render() {
        return (
            <div>
                <NewTodoField inputRef={(input) => {this.todoInput = input;}} onChange={this.onChange} value={this.state.fieldText} />
                <SaveTodo onClick={this.onClick} />
            </div>
        );
    }
}
