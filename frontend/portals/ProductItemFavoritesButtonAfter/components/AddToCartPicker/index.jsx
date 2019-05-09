import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasePicker from '@shopgate/pwa-common/components/Picker';
import Sheet from '@shopgate/pwa-ui-shared/Sheet';
import Conditioner from '@shopgate/pwa-core/classes/Conditioner';
import List from './components/List';
import AddToCartButton from './components/AddToCartButton';
import connect from './connector';
import getConfig from '../../../../helpers/getConfig';
import createPickerItems from '../../../../helpers/createPickerItems';

const { maxEntries } = getConfig();
const clickDelay = 150;

/**
 * AddToCartPicker Component
 */
class AddToCartPicker extends Component {
  static propTypes = {
    goToProductPage: PropTypes.func,
    handleAddToCart: PropTypes.func,
    isOrderable: PropTypes.bool,
    isSimpleProduct: PropTypes.bool,
    productName: PropTypes.string,
    showModal: PropTypes.func,
    stock: PropTypes.shape(),
  }
  static defaultProps = {
    goToProductPage: () => {},
    handleAddToCart: () => {},
    isOrderable: true,
    isSimpleProduct: false,
    productName: null,
    showModal: () => Promise().resolve(true),
    stock: null,
  };

  /**
   * Component Constructor
   * @param {Object} props Component props
   */
  constructor(props) {
    super(props);
    this.productConditioner = new Conditioner();
    this.productConditioner.addConditioner('validateProduct', this.validateProduct);
  }
  state = {
    addedQuantity: 0,
  };

  /**
   * Returns the props for the picker button.
   * @return {Object}
   */
  get buttonProps() {
    return {
      isDisabled: !this.props.isOrderable,
      conditioner: this.productConditioner,
      addedQuantity: this.state.addedQuantity,
      handleAddToCart: /* istanbul ignore next */ () => {},
      onClick: () => {},
      isLoading: false,
      hasLoading: true,
      noShadow: false,
      className: null,
      type: 'default',
    };
  }

  /**
   * Provides product validation for product conditioner
   * @return {boolean}
   */
  validateProduct = () => {
    const {
      isOrderable, isSimpleProduct, showModal, goToProductPage,
    } = this.props;
    if (!isOrderable) {
      return false;
    }
    if (!isSimpleProduct) {
      showModal({ message: 'This product has options', confirm: 'Go to product page' })
        .then((result) => {
          if (result) {
            goToProductPage();
          }
        });
      return false;
    }
    return true;
  }

  listComponent = ({ items, onSelect }) => (
    <List>
      {items.map(item => (
        <List.Item
          key={item.value}
          title={item.label}
          onClick={() => {
            setTimeout(() => {
              onSelect(item.value);
            }, clickDelay);
          }}
        />
      ))}
    </List>
  );

  modalComponent = modalProps =>
    (<Sheet {...modalProps} title={`Choose Quantity for ${this.props.productName}`} />);

  handelAddToCart = (quantity) => {
    this.props.handleAddToCart(quantity);

    this.setState({
      addedQuantity: this.state.addedQuantity + quantity,
    });
  };

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    const pickerItems = createPickerItems(this.props.stock, maxEntries);
    return (
      <BasePicker
        onClick={this.handelAddToCart}
        items={pickerItems}
        modalComponent={this.modalComponent}
        buttonProps={this.buttonProps}
        buttonComponent={AddToCartButton}
        listComponent={this.listComponent}
        onSelect={this.handelAddToCart}
      />
    );
  }
}

export default connect(AddToCartPicker);
