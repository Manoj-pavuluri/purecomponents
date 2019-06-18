import React, { PureComponent } from 'react'

export default class purecomponent extends PureComponent {
    render() {
        console.log("purecomponent")
        return (
            <div>
                <h1>hello world {this.props.name}</h1>
            </div>
        )
    }
}
