import { connect } from 'react-redux';
import {
  getProduct,
  hasProductVariety,
  isProductOrderable,
  getProductStock,
} from '@shopgate/pwa-common-commerce/product/selectors/product';
import addProductsToCart from '@shopgate/pwa-common-commerce/cart/actions/addProductsToCart';
import showModal from '@shopgate/pwa-common/actions/modal/showModal';
import { historyPush} from '@shopgate/pwa-common/actions/router';
import { ITEM_PATH } from '@shopgate/pwa-common-commerce/product/constants';
import { bin2hex } from '@shopgate/pwa-common/helpers/data';
import { getProductName } from '../../../../selectors';

const mapStateToProps = (state, props) => ({
  productName: getProductName(state, props),
  isSimpleProduct: !hasProductVariety(state, props),
  isOrderable: isProductOrderable(state, props),
  stock: getProductStock(state, props),
});

const mapDispatchToProps = (dispatch, { productId }) => ({
  handleAddToCart: quantity => (
    dispatch(addProductsToCart([{ quantity, productId }]))
  ),
  showModal: options => dispatch(showModal(options)),
  goToProductPage: () => (
    dispatch(historyPush({ pathname: `${ITEM_PATH}/${bin2hex(productId)}` }))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
