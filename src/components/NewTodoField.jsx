import React from 'react'

export default class NewTodoField extends React.Component {
   constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        var newTodoText = e.target.value;
        this.props.onChange(newTodoText);
    }

    render() {
        return (
            <input type="text" ref={this.props.inputRef} className='todo-field' placeholder='New Item' onChange={this.handleChange} value={this.props.value} />
        );
    }
}
