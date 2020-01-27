import React from 'react';
import { shallow } from 'enzyme';
import AddToCartPickerButton from './index';

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

describe('AddToCartPickerButton', () => {
  it('should render', () => {
    const component = shallow(<AddToCartPickerButton />);
    expect(component).toMatchSnapshot();
  });
});
