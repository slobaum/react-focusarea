import * as React from 'react';
import propTypes from 'prop-types';
import {AriaLabelPropType} from './propTypes';


export const _computeStyle = ({outline, style}) => !outline
    ? {outlineWidth: 0, ...style}
    : style;

export const _computeTabIndex = ({allowDirectRefocus, hasMovedFocus}) => !allowDirectRefocus && hasMovedFocus ? -1 : 0

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
    const box = React.useRef(null);
    const [hasMovedFocus, setHasMovedFocus] = React.useState(false);

    React.useEffect(() => {
        if (autoFocus)
            box.current.focus();
    }, [box, autoFocus]);

    return (
        <div
            {...props}
            ref={box}
            onBlur={_makeBlurHandler({box, setHasMovedFocus, onFocusLost})}
            tabIndex={_computeTabIndex({allowDirectRefocus, hasMovedFocus})}
            style={_computeStyle({outline, style})}
        />
    );
};
FocusArea.propTypes = {
    'aria-label': AriaLabelPropType,
    'aria-labelledby': AriaLabelPropType,
    onFocusLost: propTypes.func.required,
    role: propTypes.string,
    autoFocus: propTypes.bool,
    outline: propTypes.bool,
    allowDirectRefocus: propTypes.bool,
};
FocusArea.defaultProps = {
    role: 'region',
    autoFocus: true,
};
