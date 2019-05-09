import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasePicker from '@shopgate/pwa-common/components/Picker';
import Sheet from '@shopgate/pwa-ui-shared/Sheet';
import AddToCartPickerButton from './components/AddToCartPickerButton';
import List from './components/List';
import connect from './connector';
import createPickerItems from '../../../../../../helpers/createPickerItems';
import { ADD_TO_CART_BUTTON_TYPE_DEFAULT } from '../../../../../../constants';
import styles from './style';

/**
 * The AddToCartPicker component.
 */
class AddToCartPicker extends Component {
  state = {
    addedQuantity: 0,
  };

  listComponent = ({ items, onSelect }) => (
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
    // Todo check for configurable product
    const pickerItems = createPickerItems(this.props.stock);
    /**
     * TODO
     * set up connection for isDisabled, etc..
     */
    let buttonProps = {
      ...this.props.buttonProps,
      isDisabled: true,
      isOrderable: true,
      isLoading: false,
      addedQuantity: this.state.addedQuantity,
      className: styles.buttonFlat,
    };
    if (this.props.isDisabled) {
      buttonProps = {
        ...buttonProps,
        className: styles.noShadow,
      };
    }
    return (
      <BasePicker
        onClick={() => { }}
        items={pickerItems}
        modalComponent={this.modalComponent}
        buttonProps={buttonProps}
        buttonComponent={AddToCartPickerButton}
        listComponent={this.listComponent}
        onSelect={this.handelAddToCart}
      />
    );
  }
}

export default connect(AddToCartPicker);
