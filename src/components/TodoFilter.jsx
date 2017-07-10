import React from 'react'

export default class TodoFilter extends React.Component {
    handleClick = e => {this.props.changeFilter(this.props.status.status)}
    render() {
        return (
            <button className={"filter-tag " + this.props.status.className} onClick={this.handleClick} >
                {this.props.status.text} <i className={this.props.activeFilter ? "fa fa-check-square-o" : "fa fa-square-o"}></i>
            </button>
        )
    }
}
