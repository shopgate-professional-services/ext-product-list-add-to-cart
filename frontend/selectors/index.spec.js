import {
  isProductOnFavoriteList,
  getProductName,
} from './index';
import {
  stateWithCurrentProduct,
  stateWithoutCurrentProduct,
} from './index.mock';

describe('Product List Add to Car Selectors', () => {
  describe('isProductOnFavoriteList', () => {
    it('should return false when no props with a productId where passed', () => {
      const productId = '';
      const result = isProductOnFavoriteList(stateWithCurrentProduct, { productId });
      expect(result).toBe(false);
    });

    it('should return false when a productId is not on the list', () => {
      const productId = '321';
      const result = isProductOnFavoriteList(stateWithCurrentProduct, { productId });
      expect(result).toBe(false);
    });

    it('should return true when a product is on the list', () => {
      const productId = '123';
      const result = isProductOnFavoriteList(stateWithCurrentProduct, { productId });
      expect(result).toBe(true);
    });
  });
  describe('getProductName', () => {
    it('should return null if no current product', () => {
      const productId = '123';
      const name = getProductName(stateWithoutCurrentProduct, { productId });
      expect(name).toEqual(null);
    });
    it('should return product name if there is a current product', () => {
      const productId = '123';
      const name = getProductName(stateWithCurrentProduct, { productId });
      expect(name).toEqual('mock');
    });
  });
});
