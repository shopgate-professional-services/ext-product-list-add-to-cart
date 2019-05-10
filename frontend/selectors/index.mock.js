export const stateWithoutCurrentProduct = {
  product: {
    currentProduct: {
      productId: null,
    },
    productsById: {},
  },
};

export const stateWithCurrentProduct = {
  product: {
    currentProduct: {
      productId: '123',
    },
    productsById: {
      123: {
        productData: {
          name: 'mock',
          id: '123',
          flags: {
            hasChildren: true,
          },
          stock: {
            orderable: true,
          },
        },
      },
      321: {
        productData: {
          id: '321',
          stock: {
            orderable: true,
          },
        },
      },
    },
  },
  favorites: {
    products: {
      ids: ['123'],
    },
  },
};
