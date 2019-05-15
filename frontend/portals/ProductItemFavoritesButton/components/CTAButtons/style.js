import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { variables } = themeConfig;

// Cart ratio is approx 2.33/1
const cartButtonSize = (variables.big * 2.33);
const cartButtonIconSize = variables.big;

const buttons = css({
  position: 'absolute',
  right: variables.gap.small,
  transform: 'translate3d(0, -60%, 0)',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '> :last-child': {
    marginLeft: variables.gap.small,
  },
}).toString();

const favButton = css({
  zIndex: 1, // Prevents the icons to be visible outside of the circle
  fontSize: 12,
}).toString();

const ripple = css({
  padding: 8,
}).toString();

export default {
  buttons,
  cartButtonSize,
  cartButtonIconSize,
  favButton,
  ripple,
};
