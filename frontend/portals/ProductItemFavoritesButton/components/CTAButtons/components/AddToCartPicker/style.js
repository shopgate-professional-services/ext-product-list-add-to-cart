import { css } from 'glamor';

const addToCartShadow = css({
  display: 'absolute',
  boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.25) !important',
}).toString();

const noShadow = css({
  display: 'absolute',
  boxShadow: '0 3px 4px rgba(0, 0, 0, 0.13)',
});

export default {
  addToCartShadow,
  noShadow,
};
