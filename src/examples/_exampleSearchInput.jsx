import React from 'react';
import {FocusArea} from '../lib';

const _getFocusAreaStyles = focused => ({
    backgroundColor: focused
        ? '#336699'
        : 'rgba(0, 0, 0, .75)',
    position: 'fixed',
    top: 0,
    right: '10%',
    padding: focused
        ? '0.25em 0.5em 0.5em 0.5em'
        : '.25em',
    borderRadius: '0 0 5px 5px',
    transition: 'padding 0.25s, background-color .5s',
});
const _getInputStyles = focused => ({
    border: 'none',
    backgroundColor: focused
        ? 'rgba(255, 255, 255, 1)'
        : 'rgba(255, 255, 255, 0.7)'
});
const _getResultStyles = shown => ({
    display: shown ? 'flex' : 'none',
    flexDirection: 'column',
});
const ResultLink = props => (
    <a
        style={{
            color: 'white',
            textDecoration: 'none',
        }}
        href="www.google.com"
        {...props}
        onClick={domEvent => {
            domEvent.preventDefault();
            alert(`You clicked ${props.children}`)
        }}
    >
        {props.children}
    </a>
);

export const SearchInput = () => {
    const [focused, setFocused] = React.useState(false);

    return (
        <FocusArea
            onFocusLost={() => setFocused(false)}
            autoFocus={false}
            style={_getFocusAreaStyles(focused)}
            aria-label="Example search input"
        >
            <input
                type='text'
                placeholder='Example Search...'
                onFocus={() => setFocused(true)}
                style={_getInputStyles(focused)}
            />
            <div style={_getResultStyles(focused)}>
                <ResultLink>Result 01</ResultLink>
                <ResultLink>Result 02</ResultLink>
                <ResultLink>Result 03</ResultLink>
            </div>
        </FocusArea>
    );
};
