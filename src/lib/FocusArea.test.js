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