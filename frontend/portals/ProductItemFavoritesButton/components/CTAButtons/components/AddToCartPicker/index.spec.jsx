import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from '@shopgate/pwa-common/store';
import { Provider } from 'react-redux';
import AddToCartPicker from './index';

const store = createMockStore();

describe('AddToCartPicker', () => {
  it('should render', () => {
    const component = shallow((
      <Provider store={store}>
        <AddToCartPicker />
      </Provider>
    ));
    expect(component).toMatchSnapshot();
  });
});
