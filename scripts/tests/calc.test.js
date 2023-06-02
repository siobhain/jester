const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 55 for 33 + 22", () => {
            expect(addition(33, 22)).toBe(55);
        });
        test("should return invalid input for 33 + donkey", () => {
            expect(addition(33, donkey)).toBeUndefined();
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});