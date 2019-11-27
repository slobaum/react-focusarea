import React from 'react';

export const useAutofocusRef = autoFocus => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (autoFocus)
            ref.current.focus();
    }, [ref, autoFocus]);

    return ref;
};
