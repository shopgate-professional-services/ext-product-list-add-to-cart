import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

/**
 * Product name
 * @param {Node} children Children from portal
 * @return {JSX}
 * @constructor
 */
const ProductItemName = ({ children }) => (
  <div className={css({ marginTop: 6 })}>
    {children}
  </div>
);

ProductItemName.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductItemName;
