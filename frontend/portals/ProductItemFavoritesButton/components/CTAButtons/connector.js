import { connect } from 'react-redux';
import { isProductOnFavoriteList, modalMappingInfo } from '../../../../selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => ({
  isFavorite: isProductOnFavoriteList(state, props),
  modalInfo: modalMappingInfo(state, props),
});

export default connect(mapStateToProps);
