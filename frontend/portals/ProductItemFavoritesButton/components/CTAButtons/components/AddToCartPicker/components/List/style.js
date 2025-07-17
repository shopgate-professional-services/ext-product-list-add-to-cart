import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { colors } = themeConfig;

const item = css({
  boxShadow: `0 1px 0 0 ${colors.darkGray}`,
  marginBottom: 1,
  textAlign: 'center',
  ' :last-child': {
    marginBottom: 0,
    boxShadow: 'none',
  },
}).toString();

const itemNotLast = css({
  boxShadow: `0 1px 0 0 ${colors.darkGray}`,
  marginBottom: 1,
}).toString();

const innerContainer = css({
  minHeight: 56,
  position: 'relative',
}).toString();

const glow = css({
  bottom: -1,
  height: '100%',
  top: -1,
}).toString();

export default {
  item,
  itemNotLast,
  innerContainer,
  glow,
};
