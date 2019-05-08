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


  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    const pickerItems = createPickerItems(this.props.stock);
    return (
      <BasePicker
        onClick={()=>{}}
        items={pickerItems}
        modalComponent={() => (<Sheet title="Aaron is amazing" />)}
        buttonProps={{}}
        buttonComponent={AddToCartButton}
        listComponent={this.listComponent}
        onSelect={()=>{}}
      />
    );
  }
}

export default connect(AddToCartPicker);
