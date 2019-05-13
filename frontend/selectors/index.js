import { createSelector } from 'reselect';
import { getFavoritesProductsIds } from '@shopgate/pwa-common-commerce/favorites/selectors';
import { getProduct } from '@shopgate/pwa-common-commerce/product/selectors/product';

/**
 * Checks if a product is an the favorite list.
 * @param {Object} state State object needed for testing.
 * @param {Object} props A component props object.
 * @param {string} props.productId The id of the inspected product.
 * @return {boolean}
 */
export const isProductOnFavoriteList = createSelector(
  getFavoritesProductsIds,
  (state, props = {}) => props.productId,
  (productIds, productId) => !!productIds.find(id => id === productId)
);

/**
 * Returns product name
 * @return {Array}
 */
export const getProductName = createSelector(
  getProduct,
  (product) => {
    const { name = null } = product || {};
    return name;
  }
);
