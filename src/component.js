import React, { Component } from 'react'

export default class component extends Component {
    render() {
        console.log("component")
        return (
            <div>
                <h1>hello world {this.props.name}</h1>
            </div>
        )
    }
}
