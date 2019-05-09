/**
* Creates an item list for the AddToCartPicker.
* @param {Object} stock The stock property of a product.
* @param {number} maxEntries The maximum number of Entries
* @return {Array}
*/
export default (stock, maxEntries = 30) => {
  if (!stock) {
    return [];
  }

  const {
    ignoreQuantity,
    quantity,
  } = stock;

  const items = [];

  const max = ignoreQuantity ? maxEntries : Math.min(maxEntries, quantity);

  for (let i = 0; i < max; i += 1) {
    const value = i + 1;
    items.push({
      label: `${value}`,
      value,
    });
  }

  return items;
};
