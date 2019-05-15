import createPickerItems from './createPickerItems';

describe('createPickerItems', () => {
  it('should return an empty array if no stock', () => {
    const items = createPickerItems(null);
    expect(items).toEqual([]);
  });
  it('should return items array if stock exists', () => {
    const stock = {
      ignoreQuantity: false,
      quantity: 2,
    };
    const mockItems = [
      {
        label: '1',
        value: 1,
      },
      {
        label: '2',
        value: 2,
      },
    ];
    const items = createPickerItems(stock);
    expect(items).toEqual(mockItems);
  });
});
