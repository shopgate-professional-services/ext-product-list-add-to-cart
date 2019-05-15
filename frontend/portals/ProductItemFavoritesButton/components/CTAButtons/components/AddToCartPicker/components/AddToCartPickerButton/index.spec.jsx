import React from 'react';
import { shallow } from 'enzyme';
import AddToCartPickerButton from './index';

describe('AddToCartPickerButton', () => {
  it('should render', () => {
    const component = shallow(<AddToCartPickerButton />);
    expect(component).toMatchSnapshot();
  });
});
