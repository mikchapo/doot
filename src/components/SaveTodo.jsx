import React from 'react'

export default class SaveTodo extends React.Component {
    render() {
        return (
            <button className='todo-save' onClick={this.props.onClick} >Save</button>
        );
    }
}
