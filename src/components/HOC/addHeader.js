import React, { Component } from 'react';

const addHeader = (Child) => {
    return class extends Component {
        render() {
            return (
                <div className="main-header">
                <h1>Welcome to the HOA Manager!</h1>
                <p>Please log-in to continue</p>
                <Child/>
              </div>
            )
        }
    }
}

export default addHeader;