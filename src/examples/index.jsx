import * as React from 'react';
import {render} from 'react-dom';
import {FocusArea} from '../lib';


const ExampleTriggerOutside = () => {
    const [visible, setVisible] = React.useState(false);

    return (
        <div>
             <button type="button" onClick={() => setVisible(true)}>
                Show menu (with trigger outside box)
             </button>
             {visible && (
                 <FocusArea
                    onFocusLost={() => setVisible(false)}
                    aria-label="Dropdown with links"
                    style={{backgroundColor: '#ccc'}}
                 >
                     <a href="http://www.google.com">Google</a>
                     <a href="http://www.yahoo.com">Yahoo</a>
                 </FocusArea>
             )}
        </div>
    );
};

const ExampleTriggerInside = () => {
    const [visible, setVisible] = React.useState(false);

    return (
        <FocusArea
            onFocusLost={() => setVisible(false)}
            autoFocus={false}
            aria-label="Dropdown with links"
        >
            <button type="button" onClick={() => setVisible(true)}>
                Show menu (with trigger inside box)
            </button>
            {visible && (
                <div style={{backgroundColor: '#ccc'}}>
                    <a href="http://www.google.com">Google</a>
                    <a href="http://www.yahoo.com">Yahoo</a>
                </div>
            )}
        </FocusArea>
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
                    <FocusArea
                        onFocusLost={() => setVisible(false)}
                        aria-labelledby="example-modal-header"
                        role="dialog"
                        allowDirectRefocus={true}
                        style={{
                            backgroundColor: 'white',
                            padding: '2em',
                        }}
                    >
                        <h1 id="example-modal-header">Modal Window</h1>
                        This is a modal!
                        <div>
                            <input type="text" />
                            <button type="button">Some other button</button>
                        </div>
                        <button
                            type="button"
                            onClick={() => setVisible(false)}
                        >
                            Dismiss Modal
                        </button>
                    </FocusArea>
                </div>
            )}
        </div>
    );
};

const App = () => (
    <React.Fragment>
        <ExampleTriggerOutside />
        <ExampleTriggerInside />
        <ExampleModal />
    </React.Fragment>
);

render(<App />, document.getElementById('root'));
