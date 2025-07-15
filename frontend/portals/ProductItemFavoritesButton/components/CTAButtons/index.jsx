import React, { Fragment } from 'react';
import { Portal } from '@shopgate/engage/components';
import PropTypes from 'prop-types';
import FavoritesButton from '@shopgate/pwa-ui-shared/FavoritesButton';
import AddToCartPicker from './components/AddToCartPicker';
import connect from './connector';
import styles from './style';

/**
 * Renders CTA buttons for product listing cards (add to cart + toggle favorites).
 * @param {Object} props The component props.
 * @returns {JSX.Element}
 * @constructor
 */
const CTAButtons = (props) => {
  const addToCartButtonProps = {
    buttonSize: styles.cartButtonSize,
    iconSize: styles.cartButtonIconSize,
  };

  return (
    <div className={`${styles.buttons} product-list__buttons`}>
      <FavoritesButton
        active={props.isFavorite}
        productId={props.productId}
        className={styles.favButton}
        rippleClassName={styles.ripple}
      />
      <Fragment>
        <Portal name="product-item.add-to-cart-picker.before" />
        <Portal name="product-item.add-to-cart-picker">
          <AddToCartPicker
            {...props}
            buttonProps={addToCartButtonProps}
          />
        </Portal>
        <Portal name="product-item.add-to-cart-picker.after" />
      </Fragment>
    </div>
  );
};

CTAButtons.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  productId: PropTypes.string.isRequired,
};

export default connect(CTAButtons);
