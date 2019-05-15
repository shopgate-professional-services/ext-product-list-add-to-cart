import React from 'react';
import { shallow } from 'enzyme';
import ProductItemFavoritesButton from './index';

jest.mock('./components/CTAButtons', () => <div>CTAButtons</div>);

describe('ProductItemFavoritesButton', () => {
  it('should render', () => {
    const component = shallow(<ProductItemFavoritesButton />);
    expect(component).toMatchSnapshot();
  });
});
