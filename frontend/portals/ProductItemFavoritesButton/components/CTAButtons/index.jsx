import React from 'react';
import PropTypes from 'prop-types';
import { FavoritesButton } from '@shopgate/engage/components';
import AddToCartPicker from './components/AddToCartPicker';
import connect from './connector';
import styles from './style';

/**
 * Renders CTA buttons for product listing cards (add to cart + toggle favorites).
 * @param {Object} props The component props.
 * @returns {JSX}
 * @constructor
 */
const CTAButtons = (props) => {
  const addToCartButtonProps = {
    buttonSize: styles.cartButtonSize,
    iconSize: styles.cartButtonIconSize,
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
        {...props}
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
