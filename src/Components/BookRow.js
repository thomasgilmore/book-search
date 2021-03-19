import React, { Component } from 'react'

class BookRow extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt={this.props.title} />
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default BookRow
