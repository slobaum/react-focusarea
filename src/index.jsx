import * as React from 'react';
import {render} from 'react-dom';
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


const Example = () => {
    const [visible, setVisible] = React.useState(false);

    return (
        <FocusLostBox onFocusLost={() => setVisible(false)}>
            <button type="button" onClick={() => setVisible(true)}>
                Show (with trigger inside box)
            </button>
            {visible && (
                <div style={{backgroundColor: '#ccc'}}>
                    <a href="http://www.google.com">Google</a>
                    <a href="http://www.yahoo.com">Yahoo</a>
                </div>
            )}
        </FocusLostBox>
    );
};
const ExampleAutoFocus = () => {
    const [visible, setVisible] = React.useState(false);

    return (
        <div>
             <button type="button" onClick={() => setVisible(true)}>
                Show (with autofocus [trigger outside box])
             </button>
             {visible && (
                 <FocusLostBox
                      onFocusLost={() => setVisible(false)}
                      focus={true}
                      style={{backgroundColor: '#ccc'}}
                 >
                     <a href="http://www.google.com">Google</a>
                     <a href="http://www.yahoo.com">Yahoo</a>
                 </FocusLostBox>
             )}
        </div>
    );
};
const App = () => (
    <React.Fragment>
        <Example />
        <ExampleAutoFocus />
    </React.Fragment>
);

render(
    <App />,
    document.getElementById("app")
);
