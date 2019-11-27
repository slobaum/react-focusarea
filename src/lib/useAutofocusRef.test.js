import React from 'react';
import {useAutofocusRef} from './useAutofocusRef';

describe('useAutofocusRef', () => {
    let useRefMock;
    let useEffectMock;

    beforeEach(() => {
        useRefMock = jest.spyOn(React, 'useRef')
            .mockImplementation(() => 'mock_ref');
        useEffectMock = jest.spyOn(React, 'useEffect')
            .mockImplementation(() => null);
    });

    afterEach(() => {
        useRefMock.mockRestore();
        useEffectMock.mockRestore();
    });

    test('should return ref', () => {
        expect(useAutofocusRef())
            .toBe('mock_ref');
    });

    test('should invoke useEffect with function and array of values', () => {
        useAutofocusRef('mock_autofocus');

        expect(useEffectMock)
            .toHaveBeenCalledWith(
                expect.any(Function),
                ['mock_ref', 'mock_autofocus']
            )
    });

    test('useEffect should focus ref if autoFocus is true', () => {
        const mockFocus = jest.fn();

        useRefMock.mockImplementation(() => (
            {current: {focus: mockFocus}}
        ));
        useAutofocusRef(true);

        useEffectMock.mock.calls[0][0]();

        expect(mockFocus).toHaveBeenCalledTimes(1);
    });

    test('useEffect should not focus ref if autoFocus is false', () => {
        const mockFocus = jest.fn();

        useRefMock.mockImplementation(() => (
            {current: {focus: mockFocus}}
        ));
        useAutofocusRef(false);

        useEffectMock.mock.calls[0][0]();

        expect(mockFocus).not.toHaveBeenCalled();
    });
});
