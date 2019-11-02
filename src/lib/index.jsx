import * as React from 'react';
import propTypes from 'prop-types';


export const FocusLostBox = ({onFocusLost, focus, ...props}) => {
  const box = React.useRef(null);
  const [hasMovedFocus, setHasMovedFocus] = React.useState(false);

  React.useEffect(() => {
      if (focus)
          box.current.focus()
  }, [box, focus]);

  var handleBlur = domEvent => {
      const isOutsideBox = domEvent.relatedTarget && !box.current.contains(domEvent.relatedTarget);

      setHasMovedFocus(true);
      if (!domEvent.relatedTarget || isOutsideBox)
          onFocusLost && onFocusLost();
  };

  return (
       <div
           {...props}
           ref={box}
           tabIndex={focus && !hasMovedFocus ? 0 : -1}
           onBlur={handleBlur}
       />
  );
};
FocusLostBox.propTypes = {
  onFocusLost: propTypes.func
};
