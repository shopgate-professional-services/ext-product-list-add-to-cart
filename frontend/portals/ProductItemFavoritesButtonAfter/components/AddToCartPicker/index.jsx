import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasePicker from '@shopgate/pwa-common/components/Picker';
import Sheet from '@shopgate/pwa-ui-shared/Sheet';
import AddToCartButton from './components/AddToCartButton';

/**
 * The AddToCartPicker component.
 */
class AddToCartPicker extends Component {
  /**
     * Renders the component.
     * @returns {JSX}
     */
  render() {
    return (
      <BasePicker
        onClick={() => { }}
        items={[]}
        modalComponent={() => (<Sheet title="Aaron is amazing" />)}
        buttonProps={{}}
        buttonComponent={AddToCartButton}
        listComponent={() => { }}
        onSelect={() => { }}
      />
    );
  }
}

export default AddToCartPicker;
