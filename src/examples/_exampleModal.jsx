import React from 'react';
import {FocusArea} from '../lib';


const ModalBackdrop = props => (
  <div
      style={{
          backgroundColor: 'rgba(0, 0, 0, 0.25',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
      }}
      {...props}
  />
);

export const ExampleModal = () => {
  const [visible, setVisible] = React.useState(false);

  return (
      <div>
          <button type="button" onClick={() => setVisible(true)}>
              Show modal
          </button>
          {visible && (
              <ModalBackdrop>
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
              </ModalBackdrop>
          )}
      </div>
  );
};
