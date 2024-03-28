const mathOperations = require('../index');

describe("Calculator tests",  () => {
    test("Addition of 2 numbers", ()=> {
        let result = mathOperations.sum(2, 3);

        expect(result).toBe(5);
    })

    test("Substraction of 2 numbers", ()=> {
        let result = mathOperations.diff(10, 2);

        expect(result).toBe(8);
    })

    test("Multiplacation of 2 numbers", ()=> {
        let result = mathOperations.product(2, 8);

        expect(result).toBe(16);
    })

    test("Division of 2 numbers", ()=> {
        let result = mathOperations.divide(24, 8);

        expect(result).toBe(3);
    })
})