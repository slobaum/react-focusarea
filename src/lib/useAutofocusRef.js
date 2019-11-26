import {useRef, useEffect} from 'react';

export const useAutofocusRef = autoFocus => {
    const ref = useRef(null);

    useEffect(() => {
        if (autoFocus)
            ref.current.focus();
    }, [ref, autoFocus]);

    return ref;
};
