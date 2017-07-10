import React from 'react'
import TodoFilter from '../components/TodoFilter'
import {TODO_STATUSES} from '../statuses'


export default class TodoFilterSet extends React.Component{
    render() {
        return (
            <div className='filter-set'>
                {TODO_STATUSES.map(status =>
                    <TodoFilter key={status.id} status={status}  changeFilter={this.props.changeFilter} activeFilter={this.props.filter == status.status ? true : false} />
                )}
            </div>
        )
    }
}
