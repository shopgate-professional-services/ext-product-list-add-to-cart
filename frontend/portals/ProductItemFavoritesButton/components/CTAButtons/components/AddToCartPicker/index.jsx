import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasePicker from '@shopgate/pwa-common/components/Picker';
import Sheet from '@shopgate/pwa-ui-shared/Sheet';
import Conditioner from '@shopgate/pwa-core/classes/Conditioner';
import AddToCartPickerButton from './components/AddToCartPickerButton';
import List from './components/List';
import connect from './connector';
import createPickerItems from '../../../../../../helpers/createPickerItems';
import styles from './style';
import getConfig from '../../../../../../helpers/getConfig';

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
    goToProductPage: () => { },
    handleAddToCart: () => { },
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
    let props = {
      isDisabled: !this.props.isOrderable,
      conditioner: this.productConditioner,
      addedQuantity: this.state.addedQuantity,
      handleAddToCart: /* istanbul ignore next */ () => { },
      onClick: () => { },
      isLoading: false,
      hasLoading: true,
      noShadow: false,
      className: null,
      type: 'default',
    };

    if (props.noShadow) {
      // Inject additional classes when the button is rendered without a shadow.
      props = {
        ...props,
        className: props.isDisabled ? styles.addToCartShadow : styles.noShadow,
      };
    }
    return props;
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
      showModal({
        message: 'product_list_add_to_cart.modal.message',
        confirm: 'product_list_add_to_cart.modal.confirm',
      })
        .then((result) => {
          if (result) {
            goToProductPage();
          }
        });
      return false;
    }
    return true;
  }

  /**
   * @returns {JSX}
   */
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

  /**
   * @param {Object} modalProps Props for modal
   * @returns {JSX}
   */
  modalComponent = modalProps =>
    (<Sheet {...modalProps} title={`Choose Quantity for ${this.props.productName}`} />);

  /**
   * Function to handle cart
   * @param {number} quantity quantity selected.
   */
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
        modalComponent={this.modalComponent}
        buttonProps={this.buttonProps}
        buttonComponent={AddToCartPickerButton}
        onClick={this.handelAddToCart}
        items={pickerItems}
        listComponent={this.listComponent}
        onSelect={this.handelAddToCart}
      />
    );
  }
}

export default connect(AddToCartPicker);