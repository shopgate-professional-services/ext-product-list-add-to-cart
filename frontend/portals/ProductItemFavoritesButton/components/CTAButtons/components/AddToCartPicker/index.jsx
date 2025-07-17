import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker } from '@shopgate/engage/components';
import Sheet from '@shopgate/pwa-ui-shared/Sheet';
import Conditioner from '@shopgate/pwa-core/classes/Conditioner';
import AddToCartPickerButton from './components/AddToCartPickerButton';
import List from './components/List';
import connect from './connector';
import createPickerItems from '../../../../../../helpers/createPickerItems';
import styles from './style';
import getConfig from '../../../../../../helpers/getConfig';

const { maxEntries, addFirstVariantToCart } = getConfig();
const clickDelay = 150;

/**
 * AddToCartPicker Component
 */
class AddToCartPicker extends Component {
  static propTypes = {
    cachedVariants: PropTypes.shape(),
    fetchVariants: PropTypes.func,
    goToProductPage: PropTypes.func,
    handleAddToCart: PropTypes.func,
    isOrderable: PropTypes.bool,
    isSimpleProduct: PropTypes.bool,
    modalInfo: PropTypes.arrayOf(PropTypes.string),
    productName: PropTypes.string,
    showModal: PropTypes.func,
    stock: PropTypes.shape(),
  }

  static defaultProps = {
    fetchVariants: () => { },
    goToProductPage: () => { },
    handleAddToCart: () => { },
    isOrderable: true,
    cachedVariants: null,
    isSimpleProduct: false,
    modalInfo: null,
    productName: null,
    showModal: () => Promise().resolve(true),
    stock: null,
  };

  static contextTypes = {
    i18n: PropTypes.func,
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
      handleAddToCart: () => { },
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
      isOrderable, isSimpleProduct, showModal, goToProductPage, modalInfo,
    } = this.props;
    if (!isOrderable) {
      return false;
    }

    if (modalInfo.length > 0) {
      showModal({
        message: modalInfo,
        confirm: 'product_list_add_to_cart.modalInfo.confirm',
        dismiss: 'product_list_add_to_cart.modalInfo.cancel',
      })
        .then((result) => {
          if (result) {
            goToProductPage();
          }
        });
      return false;
    }

    if (addFirstVariantToCart && isOrderable && !isSimpleProduct) {
      return true;
    }

    if (!isSimpleProduct) {
      showModal({
        message: 'product_list_add_to_cart.modal.message',
        confirm: 'product_list_add_to_cart.modal.confirm',
        dismiss: 'product_list_add_to_cart.modal.cancel',
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
   * @returns {JSX.Element}
   */
  listComponent = ({ items, onSelect, onClose }) => (
    <List>
      {items.map(item => (
        <List.Item
          key={item.value}
          title={item.label}
          onClick={() => {
            setTimeout(() => {
              onSelect(item.value);
              onClose();
            }, clickDelay);
          }}
        />
      ))}
    </List>
  );

  /**
   * @param {Object} modalProps Props for modal
   * @returns {JSX.Element}
   */
  modalComponent = (modalProps) => {
    const { __ } = this.context.i18n();
    const translatedTitle = __('product_list_add_to_cart.sheet_title');
    return (<Sheet {...modalProps} title={`${translatedTitle} ${this.props.productName}`} />);
  }

  /**
   * Function to handle products added to cart
   * @param {number} quantity quantity selected.
   */
  onAddToCart = async (quantity) => {
    const {
      isOrderable, isSimpleProduct, fetchVariants, handleAddToCart, cachedVariants,
    } = this.props;
    if (addFirstVariantToCart && isOrderable && !isSimpleProduct) {
      try {
        const cachedVariantId = cachedVariants ? cachedVariants.variants?.products[0].id : null;

        const variants = await fetchVariants();

        // case 1: product variant request has not been done before
        if (variants) {
          const variantId = variants.products[0].id;
          handleAddToCart(quantity, variantId);
          this.setState(prevState => ({
            addedQuantity: prevState.addedQuantity + quantity,
          }));
        }
        // case 2: product variant request has been done before and variants were cached
        if (!variants && cachedVariantId) {
          handleAddToCart(quantity, cachedVariantId);
          this.setState(prevState => ({
            addedQuantity: prevState.addedQuantity + quantity,
          }));
        }
      } catch (error) {
        console.error('Failed to fetch variants:', error);
      }
    } else {
      handleAddToCart(quantity);
      this.setState(prevState => ({
        addedQuantity: prevState.addedQuantity + quantity,
      }));
    }
  };

  /**
   * Renders the component.
   * @returns {JSX.Element}
   */
  render() {
    const pickerItems = createPickerItems(this.props.stock, maxEntries);
    return (
      <Picker
        modalComponent={this.modalComponent}
        buttonProps={this.buttonProps}
        buttonComponent={AddToCartPickerButton}
        items={pickerItems}
        listComponent={this.listComponent}
        onSelect={this.onAddToCart}
        className={styles.picker}
      />
    );
  }
}

export default connect(AddToCartPicker);
