import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { shadows } = themeConfig;

const picker = css({
  display: 'flex',
}).toString();

const addToCartShadow = css({
  boxShadow: shadows.buttons.elevated,
}).toString();

const noShadow = css({
  boxShadow: shadows.buttons.disabled,
});

export default {
  picker,
  addToCartShadow,
  noShadow,
};
