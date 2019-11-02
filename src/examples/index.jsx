import * as React from 'react';
import {render} from 'react-dom';
import {FocusLostBox} from '../lib';


const ExampleTriggerInside = () => {
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
const ExampleTriggerOutside = () => {
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
        <ExampleTriggerInside />
        <ExampleTriggerOutside />
    </React.Fragment>
);

render(<App />, document.getElementById('root'));
