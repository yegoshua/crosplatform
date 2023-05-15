import { Settlement } from "../Classes/Settlement";

class MockSettlement extends Settlement {
    S() {
        // Implement the abstract method for the mock class
    }
}

describe("Settlement", () => {
let settlement: MockSettlement;

beforeEach(() => {
    settlement = new MockSettlement();
    settlement.naz = "Example Settlement";
    settlement.h = 1000;
    settlement.s = 500;
    settlement.numberInHouse = 50;
    settlement.density = 0;
});

test("show() should return the correct string representation", () => {
    const result = settlement.show();
    expect(result).toBe(
    "Назва = Example Settlement площа = 500 густота населення = 0"
    );
});

test("S() should be implemented in derived classes", () => {
    expect(() => {
    settlement.S();
    }).toThrowError("S() method is not implemented.");
});
});