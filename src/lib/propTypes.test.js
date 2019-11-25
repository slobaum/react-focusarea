import propTypes from 'prop-types';
import {AriaLabelPropType} from './propTypes';


describe('AriaLabelPropType', () => {

    beforeEach(() => {
        jest.spyOn(propTypes, 'string')
            .mockImplementation(() => null);
    });

    afterEach(() => {
        propTypes.string.mockRestore();
    })

    describe('should throw error', () => {
        test('if no props are passed', () => {
            expect(() => AriaLabelPropType()).toThrow();
        });
        test('if neither aria-label or aria-labelledby is present', () => {
            expect(() => AriaLabelPropType({'something': 'yes'})).toThrow();
        });
    });

    describe('should not throw error', () => {
        test('if aria-label is present as a string', () => {
            expect(() => {
                AriaLabelPropType({'aria-label': 'Label'});
            }).not.toThrow();
        });
        test('if aria-labelledby is present as a string', () => {
            expect(() => {
                AriaLabelPropType({'aria-labelledby': 'some-element'});
            }).not.toThrow();
        });
    });

    test('should invoke string propType if other checks pass', () => {
        AriaLabelPropType({'aria-label': 'Label'});
        expect(propTypes.string).toHaveBeenCalledTimes(1);
    });

});
