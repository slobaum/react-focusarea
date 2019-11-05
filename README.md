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
- `aria-label`: description
- `aria-labelledby`: description
- `role` (default: `region`): description
- `autoFocus` (default: `true`): description
- `outline`: description
- `allowDirectRefocus`: description
