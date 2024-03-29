/**
 * @param {Array} tags product tags
 * @param {Array} triggerTags config trigger tags
 * @returns {boolean}
 */
export const hasTriggerTag = (tags, triggerTags) => {
  if (!tags || !triggerTags) {
    return false;
  }

  return tags.some(tag =>
    triggerTags.some(trigger => trigger === tag));
};

/**
 * @param {Array} additionalProperties product additional properties
 * @param {Array} properties product additional properties
 * @param {Array} triggerProps config trigger props
 * @returns {boolean}
 */
export const hasTriggerProp = (additionalProperties, properties, triggerProps) => {
  if ((!additionalProperties && !properties) || !triggerProps) {
    return false;
  }

  if (additionalProperties) {
    return additionalProperties.some(obj =>
      triggerProps.some(trigger =>
        trigger.label === obj.label && trigger.value === obj.value));
  }

  if (properties) {
    return properties.some(obj =>
      triggerProps.some(trigger =>
        trigger.label === obj.label && trigger.value === obj.value));
  }

  return false;
};

/**
 * @param {Object} productData productDataObject
 * @param {Object} info config modalMapping info
 * @returns {boolean} should filter
 */
export const isTriggered = (productData, info) => {
  const { tags, additionalProperties, properties } = productData || {};
  const { triggerTags, triggerProps } = info || {};

  return hasTriggerTag(tags, triggerTags) ||
  hasTriggerProp(additionalProperties, properties, triggerProps);
};

