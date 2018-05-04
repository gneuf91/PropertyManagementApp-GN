import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header Component</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Header;