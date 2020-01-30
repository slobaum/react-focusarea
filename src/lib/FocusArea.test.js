import {
    _computeStyle,
    _computeTabIndex,
    _makeBlurHandler,
    FocusArea
} from './FocusArea';


describe('_computeStyle', () => {
    describe('if outline is truthy', () => {
        test('should return style unmodified', () => {
            expect(
                _computeStyle({
                    outline: true,
                    style: {border: '10px dotted lightgreen'}
                })
            ).toEqual(
                {border: '10px dotted lightgreen'}
            );
        });
    });
    describe('if outline is falsy', () => {
        test('should return style with outlineWidth set to 0', () => {
            expect(
                _computeStyle({
                    outline: false,
                    style: {border: '10px dotted lightgreen'}
                })
            ).toEqual(
                {
                    outlineWidth: 0,
                    border: '10px dotted lightgreen'
                }
            );
        });
    });
});

describe('_computeTabIndex', () => {
    [
        {
            result: -1,
            data: [false, false, false],
        },
        {
            result: -1,
            data: [true, false, false],
        },
        {
            result: -1,
            data: [false, true, false],
        },
        {
            result: 0,
            data: [false, false, true],
        },
        {
            result: 0,
            data: [true, false, true],
        },
        {
            result: -1,
            data: [false, true, true],
        },
        {
            result: -1,
            data: [true, true, false],
        },
        {
            result: 0,
            data: [true, true, true],
        },
    ].forEach(config => {
        const {
            result,
            data: [allowDirectRefocus, hasMovedFocus, autoFocus],
        } = config;

        test(`return ${result} if allowDirectRefocus is ${allowDirectRefocus}, hasMovedFocus is ${hasMovedFocus}, autoFocus is ${autoFocus}`, () => {
            expect(_computeTabIndex({
                allowDirectRefocus,
                hasMovedFocus,
                autoFocus,
            }))
                .toBe(result);
        });
    });
});

describe('_makeBlurHandler', () => {
    const _makeMockBox = contains => ({current: {contains: () => contains}});
    const _makeMockDomEvent = relatedTarget => ({relatedTarget});

    test('should return a function when invoked', () => {
        expect(typeof(_makeBlurHandler({}))).toBe('function');
    });

    test('should invoke setHasMovedFocus with true', () => {
        const setHasMovedFocus = jest.fn();

        _makeBlurHandler({
            setHasMovedFocus,
            box: _makeMockBox(true),
            onFocusLost: jest.fn(),
        })(_makeMockDomEvent());

        expect(setHasMovedFocus).toHaveBeenCalledWith(true);
    });

    describe('with relatedTarget', () => {
        test('should invoke onFocusLost if box does not contain related target', () => {
            const onFocusLost = jest.fn();

            _makeBlurHandler({
                onFocusLost,
                setHasMovedFocus: jest.fn(),
                box: _makeMockBox(false),
            })(_makeMockDomEvent({}));

            expect(onFocusLost).toHaveBeenCalledTimes(1);
        });
        test('should not invoke onFocusLost if box contains related target', () => {
            const onFocusLost = jest.fn();

            _makeBlurHandler({
                onFocusLost,
                setHasMovedFocus: jest.fn(),
                box: _makeMockBox(true),
            })(_makeMockDomEvent({}));

            expect(onFocusLost).not.toHaveBeenCalled();
        });
    });

    describe('without relatedTarget', () => {
        test('should invoke onFocusLost', () => {
            const onFocusLost = jest.fn();

            _makeBlurHandler({
                onFocusLost,
                setHasMovedFocus: jest.fn(),
                box: _makeMockBox(),
            })(_makeMockDomEvent({}));

            expect(onFocusLost).toHaveBeenCalledTimes(1);
        });
    });
});
