import Event from '@shopgate/pwa-core/classes/Event';
import PropTypes from 'prop-types';
import AddToCartButton from '@shopgate/pwa-ui-shared/AddToCartButton';
import { EVENT_ADD_TO_CART_MISSING_VARIANT } from '@shopgate/pwa-common-commerce/cart/constants';
import { ADD_TO_CART_BUTTON_TYPE_DEFAULT } from '../../../../../../constants';

/**
 * Renders AddToCartButton
 */
class AddToCartPickerButton extends AddToCartButton {
  /**
   * Extend the prop types of the parent component.
   * @return {Object}
   */
  static get propTypes() {
    // openList comes from BasePicker
    return {
      ...super.propTypes,
      openList: PropTypes.func.isRequired,
    };
  }

  /**
 * Click handler for the button.
 * @return {boolean}
 */
  handleClick = () => {
    const { showCheckmark } = this.state;
    const {
      isDisabled,
      isLoading,
      conditioner,
      openList,
      type,
    } = this.props;

    if (showCheckmark || isLoading || isDisabled) {
      return false;
    }

    conditioner.check().then((fulfilled) => {
      if (!fulfilled) {
        if (type === ADD_TO_CART_BUTTON_TYPE_DEFAULT) {
          // Fire an event, so that the UI can react on the failed "add to cart" attempt.
          Event.call(EVENT_ADD_TO_CART_MISSING_VARIANT);
        }

        return false;
      }

      return undefined;
    });

    openList();

    return true;
  }
}

export default AddToCartPickerButton;
