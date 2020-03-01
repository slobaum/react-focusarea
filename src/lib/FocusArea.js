import React from 'react';
import propTypes from 'prop-types';
import {AriaLabelPropType} from './propTypes';
import {useAutofocusRef} from './useAutofocusRef';


export const _computeStyle = ({outline, style}) => !outline
    ? {outlineWidth: 0, ...style}
    : style;

export const _computeTabIndex = ({
    allowDirectRefocus,
    hasMovedFocus,
    autoFocus
}) => {
    // if we aren't autofocusing, it most likely means
    // the trigger is inside the focusarea. focus is
    // already captured in the box.
    if (!autoFocus)
        return -1;
    if (!allowDirectRefocus && hasMovedFocus)
        return -1;

    return 0;
};

export const _makeBlurHandler = ({box, setHasMovedFocus, onFocusLost}) => domEvent => {
    const isOutsideBox = domEvent.relatedTarget && !box.current.contains(domEvent.relatedTarget);

    setHasMovedFocus(true);
    if (!domEvent.relatedTarget || isOutsideBox)
        onFocusLost();
};

export const FocusArea = ({
    onFocusLost,
    autoFocus,
    outline,
    style,
    allowDirectRefocus,
    ...props
}) => {
    const box = useAutofocusRef(autoFocus);
    const [hasMovedFocus, setHasMovedFocus] = React.useState(false);

    return (
        <div
            {...props}
            ref={box}
            onBlur={_makeBlurHandler({box, setHasMovedFocus, onFocusLost})}
            tabIndex={_computeTabIndex({allowDirectRefocus, hasMovedFocus, autoFocus})}
            style={_computeStyle({outline, style})}
        />
    );
};
FocusArea.propTypes = {
    'aria-label': AriaLabelPropType,
    'aria-labelledby': AriaLabelPropType,
    onFocusLost: propTypes.func.isRequired,
    role: propTypes.string,
    autoFocus: propTypes.bool,
    outline: propTypes.bool,
    allowDirectRefocus: propTypes.bool,
};
FocusArea.defaultProps = {
    role: 'region',
    autoFocus: true,
};
