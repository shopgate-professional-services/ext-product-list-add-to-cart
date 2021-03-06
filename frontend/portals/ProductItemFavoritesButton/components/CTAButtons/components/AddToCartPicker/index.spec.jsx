import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from '@shopgate/pwa-common/store';
import { Provider } from 'react-redux';
import AddToCartPicker from './index';

jest.mock('@shopgate/engage/components', () => {
  /**
   * Mocked CartPlusIcon.
   * @return {JSX}
   */
  const CartPlusIcon = () => <div>CartPlusIcon</div>;
  /**
   * Mocked IndicatorCircle.
   * @return {JSX}
   */
  const IndicatorCircle = () => <div>IndicatorCircle</div>;
  /**
   * Mocked TickIcon.
   * @return {JSX}
   */
  const TickIcon = () => <div>TickIcon</div>;
  return {
    CartPlusIcon,
    IndicatorCircle,
    TickIcon,
  };
});

jest.mock('css-spring', () => () => {});

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
