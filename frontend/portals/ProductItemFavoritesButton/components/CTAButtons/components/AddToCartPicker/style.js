import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { shadows } = themeConfig;

const addToCartShadow = css({
  display: 'absolute',
  boxShadow: shadows.buttons.elevated,
}).toString();

const noShadow = css({
  display: 'absolute',
  boxShadow: shadows.buttons.disabled,
});

export default {
  addToCartShadow,
  noShadow,
};
