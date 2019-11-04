import * as React from 'react';
import {render} from 'react-dom';
import {FocusLostBox} from '../lib';


const ExampleTriggerInside = () => {
    const [visible, setVisible] = React.useState(false);

    return (
        <FocusLostBox onFocusLost={() => setVisible(false)}>
            <button type="button" onClick={() => setVisible(true)}>
                Show menu (with trigger inside box)
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
                Show menu (with trigger outside box and autofocus)
             </button>
             {visible && (
                 <FocusLostBox
                      onFocusLost={() => setVisible(false)}
                      autoFocus={true}
                      style={{backgroundColor: '#ccc'}}
                 >
                     <a href="http://www.google.com">Google</a>
                     <a href="http://www.yahoo.com">Yahoo</a>
                 </FocusLostBox>
             )}
        </div>
    );
};

const ExampleModal = () => {
    const [visible, setVisible] = React.useState(false);

    return (
        <div>
            <button type="button" onClick={() => setVisible(true)}>
                Show modal
            </button>
            {visible && (
                <div style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.25',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}>
                    <FocusLostBox
                        onFocusLost={() => setVisible(false)}
                        autoFocus={true}
                        style={{
                            backgroundColor: 'white',
                            padding: '2em',
                        }}
                    >
                        This is a modal!
                        <button
                            type="button"
                            onClick={() => setVisible(false)}
                        >
                            Okay!
                        </button>
                    </FocusLostBox>
                </div>
            )}
        </div>
    );
};

const App = () => (
    <React.Fragment>
        <ExampleTriggerInside />
        <ExampleTriggerOutside />
        <ExampleModal />
    </React.Fragment>
);

render(<App />, document.getElementById('root'));
