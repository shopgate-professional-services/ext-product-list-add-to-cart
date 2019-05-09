import { createSelector } from 'reselect';
import { getFavoritesProductsIds } from '@shopgate/pwa-common-commerce/favorites/selectors';

/**
 * Checks if a product is an the favorite list.
 * @param {Object} props A component props object.
 * @param {string} props.productId The id of the inspected product.
 * @return {boolean}
 */
export const isProductOnFavoriteList = createSelector(
  getFavoritesProductsIds,
  (props = {}) => props.productId,
  (productIds, productId) => !!productIds.find(id => id === productId)
);
