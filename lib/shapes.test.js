
const test = require('./shape');


describe('New Triangle', () => {
    it('should return a string for a red, svg triangle', () => {
        const newTriangle = new test.Triangle('JMF', 'blue', 'red');
        const result = newTriangle.render();
        console.log(result);

        expect(result).toEqual('<polygon points="200 0, 400 300, 0 300" fill="red" />')
    })
});
describe('New Square', () => {
    it('should return a string for a blue, svg square', () => {
        const newSquare = new test.Square('JMF', 'blue', 'orange');
        const result = newSquare.render();
        console.log(result);

        expect(result).toEqual('<rect x="50" y="50" width="300" height="300" fill="orange" />')
    })
});
describe('New Circle', () => {
    it('should return a string for a green, svg circle', () => {
        const newCircle = new test.Circle('JMF', 'blue', 'green');
        const result = newCircle.render();
        console.log(result);

        expect(result).toEqual('<circle cx="200" cy="200" r="150" fill="green"/>')
    })
});
