import React from 'react';
import {FocusArea} from '../lib';

export const ExampleDropdownTriggerOutside = () => {
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

export const ExampleDropdownTriggerInside = () => {
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