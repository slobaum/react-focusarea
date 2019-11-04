import * as React from 'react';
import propTypes from 'prop-types';


export const FocusLostBox = ({onFocusLost, autoFocus, ...props}) => {
    const box = React.useRef(null);
    const [hasMovedFocus, setHasMovedFocus] = React.useState(false);

    React.useEffect(() => {
        if (autoFocus)
            box.current.focus();
    }, [box, autoFocus]);

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
            onBlur={handleBlur}
            tabIndex={hasMovedFocus ? -1 : 0}
        />
    );
};
FocusLostBox.propTypes = {
  onFocusLost: propTypes.func
};
