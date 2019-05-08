import { connect } from 'react-redux';
import {
  getProduct,
  hasProductVariety,
  isProductOrderable,
  getProductStock,
} from '@shopgate/pwa-common-commerce/product/selectors/product';

const mapStateToProps = (state, props) => ({
  product: getProduct(state, props),
  isSimpleProduct: !hasProductVariety(state, props),
  isOrderable: isProductOrderable(state, props),
  stock: getProductStock(state, props),
});

export default connect(mapStateToProps);
