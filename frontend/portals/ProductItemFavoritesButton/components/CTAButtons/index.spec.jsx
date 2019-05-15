import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from '@shopgate/pwa-common/store';
import { Provider } from 'react-redux';
import CTAButtons from './index';

jest.mock('@shopgate/pwa-ui-shared/FavoritesButton', () => <div>FavoritesButton</div>);
jest.mock('./components/AddToCartPicker/index', () => <div>AddToCartPicker</div>);

jest.mock('../../../../selectors', () => ({
  isProductOnFavoriteList: true,
}));

const store = createMockStore();

describe('CTAButtons', () => {
  it('should render CTAButtons', () => {
    const component = shallow((
      <Provider store={store}>
        <CTAButtons />
      </Provider>
    ));
    expect(component).toMatchSnapshot();
  });
});
