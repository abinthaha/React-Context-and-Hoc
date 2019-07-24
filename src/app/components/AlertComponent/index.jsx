import React, { Component } from 'react';

import withStorageHOC from '../../hoc/AlertHOC';

class AlertComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 10
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            ...this.state,
            value: this.state.value + 1
        })
    }

    render() {
        return (
            <div>
                <div>Alert {this.state.value}</div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default withStorageHOC(AlertComponent);