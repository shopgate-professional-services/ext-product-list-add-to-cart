import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasePicker from '@shopgate/pwa-common/components/Picker';
import Sheet from '@shopgate/pwa-ui-shared/Sheet';
import AddToCartPickerButton from './components/AddToCartPickerButton';

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
        buttonComponent={AddToCartPickerButton}
        listComponent={() => { }}
        onSelect={() => { }}
      />
    );
  }
}

export default AddToCartPicker;
