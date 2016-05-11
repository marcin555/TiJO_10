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
            expect(app.assignToSwimmingCourse('Zorg', '10/06/2005')).toEqual({
                name: 'Zorg', age: 9, course: 'kids'
            });
        });
        });
    });
});


