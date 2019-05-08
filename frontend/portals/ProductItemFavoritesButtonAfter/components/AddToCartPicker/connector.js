import { connect } from 'react-redux';
import {
  getProduct,
  hasProductVariety,
  isProductOrderable,
  getProductStock,
} from '@shopgate/pwa-common-commerce/product/selectors/product';
import addProductsToCart from '@shopgate/pwa-common-commerce/cart/actions/addProductsToCart';

const mapStateToProps = (state, props) => ({
  product: getProduct(state, props),
  isSimpleProduct: !hasProductVariety(state, props),
  isOrderable: isProductOrderable(state, props),
  stock: getProductStock(state, props),
});

const mapDispatchToProps = (dispatch, { productId }) => ({
  handleAddToCart: quantity => (
    dispatch(addProductsToCart([{ quantity, productId }]))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
