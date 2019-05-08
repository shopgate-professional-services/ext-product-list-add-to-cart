import React, { Component } from 'react';

/**
 * Renders AddToCartButton
 */
class AddToCartButton extends Component {
  clicker = (event) => {
    event.stopPropagation();
    console.log('click from button', this.props)
    this.props.openList();
  }
  render() {
    return (
      <button
        onClick={this.clicker}
      >Button
      </button>);
  }
}

export default AddToCartButton;
