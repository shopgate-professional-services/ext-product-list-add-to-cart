# ext-product-list-add-to-cart

Frontend Extension which will add an add to cart button to product list views. Extension can be configured to limit the amount of quantity values shown in list modal.

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

If stock is less than maxEntries then stock amount will be used for number of quantity values.

#### Example Config
```
  {
    maxEntries: 30
  }
```


## modalMapping:
The configuration modalMapping will be used to determine which product tags or properties are used to denote the need for the associated message to be added to the product list add-to-cart modal.

The modal will be shown with the configured message and the options to redirect to the product detail page or to close the modal.

#### Important: @shopgate-project/products-properties is required for this feature.

#### Example config

```json
{
  "modalMapping": [
    {
      "triggerTags": ["tag-1", "tag-2"],
      "triggerProps": [
        {
          "label":"triggerProp-1",
          "value": true
        },
        {
          "label":"triggerProp-2",
          "value": false
        }
      ],
      "message": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
    },
    {
      "triggerTags": ["exampleTag-1", "exampleTag-2"],
      "triggerProps": [
        {
          "label":"exampleTriggerProp-1",
          "value": "yes"
        },
        {
          "label":"exampleTriggerProp-2",
          "value": "no"
        }
      ],
      "message": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
    }
  ]
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
