import propTypes from 'prop-types';

export const AriaLabelPropType = (...args) => {
  const [props] = args;

  if (!props['aria-label'] && !props['aria-labelledby'])
      return new Error('FocusArea requires either aria-label or aria-labelledby.  More info available here:  https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute');

  return propTypes.string(...args);
};
