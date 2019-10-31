# ext-product-list-add-to-cart

Frontend Extension which will add a add to cart button to product list views. Extension can be configured to limit the amount of quanitity values shown in list modal.

## Configuration
Add the Terms and conditions extension to your Shopgate Connect deployment config. 

```
(...)
    {
        "id": "@shopgate-project/product-list-add-to-cart",
        "version": "1.0.1"
    }
(...)
```

Set the following values in your Shopgate Connect Admin:
* maxEntries - (number) specified number of quantity values to show in list modal. Default is 30.

If stock is less then maxEntries then stock amount will be used for number of quantity values.

## Example Config
```
  {
    maxEntries: 30
  }
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) file for more information.

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate Connect - ext-product-list-add-to-cart is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.