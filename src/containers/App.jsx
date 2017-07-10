import React from 'react'
import TodoList from './TodoList'
import TodoFilterSet from './TodoFilterSet'
import NewTodo from './NewTodo'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'


const App = ({todos, filter, sort, actions}) =>
    (
        <div className='app-wrapper'>
            <h2>To Do:</h2>
            <TodoFilterSet filter={filter} changeFilter={actions.changeFilter} />
            <TodoList todos={todos} filter={filter} actions={actions} sort={sort} />

            <NewTodo todos={todos} actions={actions} />
        </div>
    )

    const mapStateToProps = state => ({
      todos: state.todo,
      filter: state.filter,
      sort: state.sort
    })

    const mapDispatchToProps = dispatch => ({
        actions: bindActionCreators(TodoActions, dispatch)
    })

    export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
