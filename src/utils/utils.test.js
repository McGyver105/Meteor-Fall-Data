const getMassFromData = require('./getMassFromData')

describe('getMassFromData', () => {
    describe('functionality', () => {
        it('returns an array of ten zeros when the input has no meteors', () => {
            const input = [{}];
            expect(getMassFromData(input)).toHaveLength(10);
            expect(getMassFromData(input)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
        it('returns the final array with 1 index incremented if passed with 1 meteor', () => {
            const input = [{ name: 'test', id: '1', mass: 30, year: new Date(), recclass: 'H6' }]
            expect(getMassFromData(input)).toHaveLength(10)
            expect(getMassFromData(input)).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        })
        it('returns the final array with the first index incremented by more than 1 if passed multiple meteors less than 50', () => {
            const input = [
                { name: 'test', id: '1', mass: 30, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '1', mass: 30, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '1', mass: 30, year: new Date(), recclass: 'H6' }
            ];
            expect(getMassFromData(input)).toHaveLength(10);
            expect(getMassFromData(input)).toEqual([3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
        it('returns the final array with indexes incremented by more than 1 when passed multiple sized meteors', () => {
            const input = [
                { name: 'test', id: '1', mass: 30, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '2', mass: 70, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '3', mass: 150, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '4', mass: 210, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '5', mass: 370, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '6', mass: 375, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '7', mass: 450, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '8', mass: 900, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '9', mass: 3000, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '10', mass: 15000, year: new Date(), recclass: 'H6' },
                { name: 'test', id: '11', mass: 120000, year: new Date(), recclass: 'H6' }
            ];
            expect(getMassFromData(input)).toHaveLength(10);
            expect(getMassFromData(input)).toEqual([1, 1, 1, 1, 2, 1, 1, 1, 1, 1]);
        })
    })
    describe('Pure function', () => {
        it('does not mutate the input array', () => {
            const input = [{ name: 'test', id: '1', mass: 30, year: new Date(), recclass: 'H6' },
            { name: 'test', id: '2', mass: 70, year: new Date(), recclass: 'H6' }];
            const copyOfInput = [{ name: 'test', id: '1', mass: 30, year: new Date(), recclass: 'H6' },
            { name: 'test', id: '2', mass: 70, year: new Date(), recclass: 'H6' }];
            getMassFromData(input);
            expect(input).toEqual(copyOfInput);
        });
        it('returns an array with a different reference to the input array', () => {
            const input = [{ name: 'test', id: '1', mass: 30, year: new Date(), recclass: 'H6' },
            { name: 'test', id: '2', mass: 70, year: new Date(), recclass: 'H6' }];
            expect(getMassFromData(input)).not.toBe(input);
        });
        it('returns the same value every time', () => {
            const input = [{ name: 'test', id: '1', mass: 30, year: new Date(), recclass: 'H6' },
            { name: 'test', id: '2', mass: 70, year: new Date(), recclass: 'H6' }];
            expect(getMassFromData(input)).toEqual([1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
            expect(getMassFromData(input)).toEqual([1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
            expect(getMassFromData(input)).toEqual([1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
            expect(getMassFromData(input)).toEqual([1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
    })
})