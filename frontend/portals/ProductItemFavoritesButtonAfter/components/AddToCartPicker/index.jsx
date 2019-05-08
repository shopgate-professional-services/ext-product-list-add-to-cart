import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasePicker from '@shopgate/pwa-common/components/Picker';
import Sheet from '@shopgate/pwa-ui-shared/Sheet';
import List from './components/List';
import AddToCartButton from './components/AddToCartButton';
import connect from './connector';
import getConfig from '../../../../helpers/getConfig';
import createPickerItems from '../../../../helpers/createPickerItems';

/**
 * The AddToCartPicker component.
 */
class AddToCartPicker extends Component {
  state = {
    addedQuantity: 0,
  };

  listComponent = ({ items, onSelect }) => {
    console.log('listComponent');
    return (
      <List>
        {items.map(item => (
          <List.Item
            key={item.value}
            title={item.label}
            onClick={() => {
            setTimeout(() => {
              onSelect(item.value);
            }, 50);
          }}
          />
      ))}
      </List>
    );
  };
  modalComponent = modalProps =>
    (<Sheet {...modalProps} title="Aaron is amazing" />);

  handelAddToCart = (quantity) => {
    this.props.handleAddToCart(quantity);

    this.setState({
      addedQuantity: this.state.addedQuantity + quantity,
    });
  }
  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    //Todo check for configurable product
    const pickerItems = createPickerItems(this.props.stock);
    return (
      <BasePicker
        onClick={this.handelAddToCart}
        items={pickerItems}
        modalComponent={this.modalComponent}
        buttonProps={{disabled: !this.props.isOrderable}}
        buttonComponent={AddToCartButton}
        listComponent={this.listComponent}
        onSelect={this.handelAddToCart}
      />
    );
  }
}

export default connect(AddToCartPicker);
