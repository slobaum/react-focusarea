import React from 'react';
import {render} from 'react-dom';
import {
    ExampleDropdownTriggerOutside,
    ExampleDropdownTriggerInside,
} from './_exampleDropdowns';
import {ExampleModal} from './_exampleModal';
import {SearchInput} from './_exampleSearchInput';

const App = () => (
    <React.Fragment>
        <ExampleDropdownTriggerOutside />
        <ExampleDropdownTriggerInside />
        <ExampleModal />
        <SearchInput />
    </React.Fragment>
);

render(<App />, document.getElementById('root'));
