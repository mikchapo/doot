import React from 'react'

export default class TodoHeader extends React.Component {
    handleClick = e => {this.props.onClick(this.props.attribute.name)}

    render() {
        return (
            <th onClick={this.handleClick}>
                {this.props.attribute.displayName}
                <i className=
                    {this.props.sort.attribute == this.props.attribute.name ?
                        this.props.sort.ascending ?
                            this.props.attribute.ascendingClassName
                        :
                            this.props.attribute.descendingClassName
                    :
                        "fa fa-sort-down"
                    }
                ></i>
            </th>
        )
    }
}
