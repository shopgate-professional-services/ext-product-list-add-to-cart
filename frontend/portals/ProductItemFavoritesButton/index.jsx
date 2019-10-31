import React from 'react';
import CTAButtons from './components/CTAButtons';

/**
 * Renders CTA buttons in product-item.favorites-button portal
 * @param {Object} props props
 * @returns {JSX}
 */
const ProductItemFavoritesButton = (props) => {
  return (<CTAButtons {...props} />);
};

export default ProductItemFavoritesButton;
