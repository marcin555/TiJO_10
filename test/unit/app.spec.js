describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 17, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 15, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 2, course: 'kids'
            });

        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Adam', '10/06/2005')).toEqual({
                name: 'Adam', age: 9, course: 'kids'
            });
        });
        });
    });
});

describe('calculateArea', function () {
    it('Should return the area of figure and message', function () {
        expect(answer.calculateArea(21, 2, 0, 'Success', 'Fail')).toEqual({area: 21, message: 'Success'});
        expect(answer.calculateArea(21, 8, 6, 'Success', 'Fail')).toEqual({area: -27, message: 'Fail'});
        expect(answer.calculateArea(34, 2, 0, 'Success', 'Fail')).toEqual({area: 34, message: 'Success'});
        expect(answer.calculateArea(21, 'a', 0, 'Success', 'Fail')).toEqual(false);

    });

    it('Should return false', function () {
        expect(answer.calculateArea('aaaaaaa', 2, 0, 'Success', 'Fail')).toEqual(false);
        expect(answer.calculateArea(67, 8, 6, 3, 5)).toEqual(false);
        expect(answer.calculateArea(34, 2, 'b', 5, 'Fail')).toEqual(false);
        expect(answer.calculateArea(21, 'a', 0, 'Success', 'Fail')).toEqual(false);
    });

    it('Should return area 0 and message', function () {
        expect(answer.calculateArea(0, 0, 0, 'Success', 'Fail')).toEqual({area: 0, message: 'Big null'});
    });
});
