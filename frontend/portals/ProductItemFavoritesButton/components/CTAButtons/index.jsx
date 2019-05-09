import React from 'react';
import PropTypes from 'prop-types';
import FavoritesButton from '@shopgate/pwa-ui-shared/FavoritesButton';
import AddToCartPicker from './components/AddToCartPicker/index';
import { ADD_TO_CART_BUTTON_TYPE_DEFAULT } from '../../../../constants';
import connect from './connector';
import styles from './style';

/**
 * Renders CTA buttons for product page (add to cart + toggle favorites).
 *
 * @param {Object} props Props.
 * @returns {JSX}
 * @constructor
 */
const CTAButtons = (props) => {
  const addToCartButtonProps = {
    buttonSize: styles.cartButtonSize,
    iconSize: styles.cartButtonIconSize,
    type: ADD_TO_CART_BUTTON_TYPE_DEFAULT,
  };
  return (
    <div className={styles.buttons}>
      <FavoritesButton
        active={props.isFavorite}
        productId={props.productId}
        className={styles.favButton}
        rippleClassName={styles.ripple}
      />
      <AddToCartPicker
        buttonProps={addToCartButtonProps}
      />
    </div>
  );
};

CTAButtons.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  productId: PropTypes.string.isRequired,
};

export default connect(CTAButtons);
