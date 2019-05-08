import React from 'react';
import AddToCartPicker from './components/AddToCartPicker';

const ProductItemFavoritesButtonAfter = (props) => {
  console.warn(props);
  return <AddToCartPicker {...props} />;
};

export default ProductItemFavoritesButtonAfter;
