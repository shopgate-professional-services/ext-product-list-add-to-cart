import { createSelector } from 'reselect';
import { getProduct } from '@shopgate/pwa-common-commerce/product/selectors/product';

/**
 * Returns dummies
 * @return {Array}
 */
export const getProductName = createSelector(
  getProduct,
  (product) => {
    const { name = null } = product || {};
    return name;
  }
);
