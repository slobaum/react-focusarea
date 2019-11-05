# react-focusarea

A small, accessible component that represents an area of focus for the user. Useful for dropdowns, modals, date-pickers, or any such area that should take some action if the users focus goes elsewhere (such as hiding the area or modifying the UI). Accepts a callback to be fired when focus completely leaves the container (meaning, focusing away from the box and all descendants).

Think of this as a more accessible, keyboard-friendly alternative to `onClickOutside`. Rather than defining global listeners on the window, this manipulates and watches user focus within its defined area only.

## Example:

```javascript
<div>
  <button type="button" onClick={() => setVisible(true)}>
    Show menu
  </button>
  {visible && (
    <FocusArea
      onFocusLost={() => setVisible(false)}
      aria-label="Dropdown with links"
      className="dropdown-classname"
    >
      <a href="http://www.google.com">Google</a>
      <a href="http://www.yahoo.com">Yahoo</a>
    </FocusArea>
  )}
</div>
```

## Props

- `onFocusLost`: function to be fired when focus leaves the area
- `aria-labelledby`: pointer to accessibility label used to describe the area (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)
- `aria-label`: (alternative to `aria-labelledby`) accessibility label used to describe the area (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
- `role` (default: `region`): accessibility property used to provide semantic purpose of this area (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- `autoFocus` (default: `true`): by default, FocusArea will receive focus as soon as they are rendered. If this area is rendered before focus monitoring is desired, set this to false.
- `outline`: by default, FocusArea will not show a visible focus outline. Either define `style` or set this to true to leave outline as browser default.
- `allowDirectRefocus`: by default, if you tab off top-level FocusArea into one of its descendants, you can't focus back to the top-level element. To override this (especially useful to see accessibility label), set to `true`
